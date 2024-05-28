import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./styleProgress.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Bounce, toast } from 'react-toastify';
import { del } from '../../store/slices/productsSlice';
import { useMediaQuery } from '@mui/material';

export default function TableCategoryWrong({product ,myIndex}) {
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
    const matches = useMediaQuery("(max-width:576px)");
    const dispatch = useDispatch();
  return (
    <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td style={{ color: product.numRemaining === 0 && "red" }}>
      {product.numRemaining}
    </td>
    <td>{product.price}</td>
    <td>{product.category}</td>
    <td>
      <EditIcon
          style={{fontSize:matches && 10}}
        onClick={() => {
          setIndex(myIndex);
          setOpen(true);
          setIndexP(myIndex);
          setNameValue(product.name);
          setPriceValue(product.price);
          setImageValue(product.image);
          setCategoryValue(product.category);
          setNumRemaining(product.numRemaining);
       
        }}
      />{" "}
      <DeleteIcon
        style={{ cursor: "pointer" ,fontSize:matches && 10}}
        onClick={() => {
          dispatch(del({ index: myIndex }));
          toast.error(products[indexP].name + " deleted", {
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
        }}
      />
    </td>
  </tr>
  )
}
