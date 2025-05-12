import {useState} from "react";

export function useOrders() {

  const [order, setOrder] = useState([]);

  function fetchOrders() {}

  function fetchSingleOrder() {}

  function deleteOrder(orderId) {}

  return {fetchOrders, fetchSingleOrder, deleteOrder};
}