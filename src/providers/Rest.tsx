import { stringify } from "query-string";
import {
  CREATE,
  UPDATE,
  DELETE,
  GET_LIST,
  GET_ONE,
  GET_MANY,
  fetchUtils,
} from "react-admin";

const rest = (apiUrl, httpClient = fetchUtils.fetchJson) => {
  const convertDataRequestToHTTP = (type, resource, params) => {
    let url = "";
    const options = {};

    switch (type) {
      case GET_LIST: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          ...fetchUtils.flattenObject(params.filter),
          sort: field,
          order: order,
          page: page,
          limit: perPage,
        };
        url = `${apiUrl}/${resource}?${stringify(query)}`;
        break;
      }
      case GET_ONE:
        url = `${apiUrl}/${resource}/${params.id}`;
        break;
      case GET_MANY: {
        url = `${apiUrl}/${resource}`;
        break;
      }
      case CREATE:
        url = `${apiUrl}/${resource}`;
        options.method = "POST";
        options.body = JSON.stringify(params.data);
        break;
      case UPDATE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = "PATCH";
        options.body = JSON.stringify(params.data);
        break;
      case DELETE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = "DELETE";
        break;
      default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
  };

  const convertHTTPResponse = (response, type, resource, params) => {
    const { headers, json } = response;

    switch (type) {
      case GET_LIST:
        if (!headers.has("x-total-count")) {
          throw new Error(
            "The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?"
          );
        }
        return {
          data: json,
          total: parseInt(headers.get("x-total-count").split("/").pop(), 10),
        };
      case CREATE:
      case UPDATE:
        return { data: { ...params.data, id: json.id } };
      default:
        return { data: json };
    }
  };

  return (type, resource, params) => {
    // json-server doesn't handle filters on UPDATE route,
    // so we fallback to calling UPDATE n times instead.
    const { url, options } = convertDataRequestToHTTP(type, resource, params);
    return httpClient(url, options).then((response) =>
      convertHTTPResponse(response, type, resource, params)
    );
  };
};

export default rest;
