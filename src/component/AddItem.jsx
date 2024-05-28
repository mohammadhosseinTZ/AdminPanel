import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add } from "../store/slices/productsSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function AddItem() {
  const [open, setOpen] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [numRemainingValue, setNumRemaining] = useState("");
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const products = useSelector((state) => state.products.products);
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch(
      add({
        id: products[products.length - 1].id + 1,
        name: nameValue,
        image: imageValue,
        numRemaining: numRemainingValue,
        price: priceValue,
        category: categoryValue,
      })

    );
  };

  return (
    <div>
      <AddBoxIcon
        style={{ color: "#3030BF", margin: 5, cursor: "pointer" }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 5 }}>
            <TextField
              disabled
              label={products[products.length - 1].id + 1}
              variant="standard"
              Value={products[products.length - 1].id + 1}
              onChange={() => {}}
            />
            <TextField
              label={"name"}
              required
              variant="standard"
              Value={nameValue}
              onChange={(e) => {
                setNameValue(e.target.value);
              }}
            />

            <TextField
              label={"image"}
              variant="standard"
              required
              Value={imageValue}
              onChange={(e) => {
                setImageValue(e.target.value);
              }}
            />
            <TextField
              label={"price"}
              variant="standard"
              required
              Value={priceValue}
              onChange={(e) => {
                setPriceValue(e.target.value);
              }}
            />

            <TextField
              label={"category"}
              variant="standard"
              Value={categoryValue}
              onChange={(e) => {
                setCategoryValue(e.target.value);
              }}
            />
            <TextField
              label={"numRemaining"}
              variant="standard"
              required
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
