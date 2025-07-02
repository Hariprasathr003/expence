import React, { createContext, useEffect, useState } from "react";
import service from "../../service";

export const CreateContextForm = createContext();

function ExpencFormContext({ children }) {
  const initialValue = {
    // id: Date.now(),
    amount: "",
    description: "",
    category: "",
    date: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [store, setStore] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (edit !== null) {
        await service.updateData(edit, formValue);
        reload();
        alert("update");
      } else {
        await service.createData(formValue);
        alert("create successfully");
        reload();
      }
      setFormValue(initialValue);
    } catch (err) {
      console.log(err);
    }

    // if (edit !== null) {
    //   const update = store.map((val) =>
    //     val.id === edit ? { ...formValue, id: edit } : val
    //   );
    //   setStore(update);
    //   setEdit(null);
    // } else {
    //   setStore([...store, formValue]);
    // }
    // setFormValue(initialValue);
    // console.log(store, "storeeeeeee");
  };

  const handleEdit = (curr) => {
    setFormValue({
      amount: curr.amount,
      description: curr.description,
      category: curr.category,
      date: curr.date,
    });
    setEdit(curr.id);
  };

  const handleDel = async (curr) => {
    try {
      await service.deleteData(curr.id);
      alert("Delete successfully");
      reload();
    } catch (err) {
      console.log(err);
    }

    // const del = store.filter((val) => val.id !== curr.id);
    // setStore(del);
  };

  const reload = async () => {
    try {
      const res = await service.getAll();
      const data = res.data;
      console.log(data, "data");
      setStore(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <>
      <CreateContextForm.Provider
        value={{
          formValue,
          store,
          initialValue,
          handleDel,
          setFormValue,
          setStore,
          handleChange,
          handleSubmit,
          handleEdit,
        }}
      >
        {children}
      </CreateContextForm.Provider>
    </>
  );
}

export default ExpencFormContext;
