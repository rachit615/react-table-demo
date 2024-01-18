import { Column } from "react-table";
import TableHOC from "./TableHOC";

import { useMemo } from "react";

interface ProductTableTypes {
  id: number;
  quantity: number;
  title: string;
  price: number;
  category: string;
}

const ProductsTable = ({ data = [] }: { data: ProductTableTypes[] }) => {
  const columns: Column<ProductTableTypes>[] = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
    ],
    []
  );

  return TableHOC<ProductTableTypes>(
    columns,
    data,
    "productsBox",
    "Products"
  )();
};

export default ProductsTable;
