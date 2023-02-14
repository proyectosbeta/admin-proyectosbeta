import {
  DatagridConfigurable,
  ExportButton,
  ImageField,
  List,
  TextField,
  TopToolbar,
  SelectColumnsButton,
} from "react-admin";

const HeroesListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <ExportButton />
  </TopToolbar>
);

export const HeroesList = () => (
  <List
    actions={<HeroesListActions />}
    pagination={false}
  >
    <DatagridConfigurable bulkActionButtons={false}>
      <TextField source="id" sortable={false} />
      <ImageField source="imageUrl"/>
      <TextField source="name" sortable={false} />
      <TextField source="level" sortable={false} />
      <TextField source="attack" sortable={false} />
      <TextField source="defense" sortable={false} />
      <TextField source="damage" sortable={false} />
      <TextField source="health" sortable={false} />
      <TextField source="speed" sortable={false} />
    </DatagridConfigurable>
  </List>
);
