import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./styleProgress.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";

import {
  editCategory,
  editImage,
  editName,
  editNumRemaining,
  editPrice,
  editId,
  del,
} from "../../store/slices/productsSlice";

import Modal from "@mui/material/Modal";

import { Button, createTheme, Stack, TextField, ThemeProvider, useMediaQuery } from "@mui/material";
import { toast, Bounce } from "react-toastify";
import AddItem from "../../component/AddItem";
import FilterDashboard from "../../component/FilterDashboard";
import TableCategoryCorrect from "./TableCategoryCorrect";
import TableCategoryWrong from "./TableCategoryWrong";
import { LightChecking } from "../../App";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function TableDashboard() {
  const [newFilterCategory, setNewFilterCategory] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [numRemainingValue, setNumRemaining] = useState("");
  const [indexP, setIndexP] = useState(0);
  const [index, setIndex] = useState(0);
  const products = useSelector((state) => state.products.products);
  const [open, setOpen] = React.useState(false);
  const lightChecking = React.useContext(LightChecking)
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:576px)");
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editId({ index: indexP, id: index + 1 }));
    dispatch(editName({ index: indexP, nameValue: nameValue }));
    dispatch(editImage({ index: indexP, imageValue: imageValue }));
    dispatch(editPrice({ index: indexP, priceValue: priceValue }));
    dispatch(editCategory({ index: indexP, categoryValue: categoryValue }));
    dispatch(
      editNumRemaining({ index: indexP, numRemainingValue: numRemainingValue })
    );
    toast.success(products[indexP].name + " edited", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setOpen(false);
  };
 
  return (
 
    <div style={{ marginTop: "7%" , borderRadius: 5 }}>
      <table className={lightChecking?style.containerTableLBlack  :style.containerTable }>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>numRemaining</th>
          <th>price</th>
          <th>
            <FilterDashboard onFilter={(e) => setNewFilterCategory(e)} />
          </th>
          <th>edit</th>
        </tr>
        {products.map((product, myIndex) => {
          if (newFilterCategory !== "") {
            if (product.category === newFilterCategory) {
              return (
              <TableCategoryCorrect product={product} myIndex={myIndex}/>
              );
            }
          } else {
            return (
             <TableCategoryWrong product={product} myIndex={myIndex}/>
            );
          }
        })}
        <AddItem />
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 5 }}>
            <TextField
              disabled
              label={products[indexP].id}
              variant="standard"
              Value={index + 1}
              onChange={() => {}}
            />
            <TextField
              label={products[indexP].name}
              variant="standard"
              Value={nameValue}
              onChange={(e) => {
                setNameValue(e.target.value);
              }}
            />

            <TextField
              label={products[indexP].image}
              variant="standard"
              Value={imageValue}
              onChange={(e) => {
                setImageValue(e.target.value);
              }}
            />
            <TextField
              label={products[indexP].price}
              variant="standard"
              Value={priceValue}
              onChange={(e) => {
                setPriceValue(e.target.value);
              }}
            />

            <TextField
              label={products[indexP].category}
              variant="standard"
              Value={categoryValue}
              onChange={(e) => {
                setCategoryValue(e.target.value);
              }}
            />
            <TextField
              label={products[indexP].numRemaining}
              variant="standard"
              Value={numRemainingValue}
              onChange={(e) => {
                setNumRemaining(e.target.value);
              }}
            />
            <Button type="submit" variant="outlined">
              done
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
 
  );
}
