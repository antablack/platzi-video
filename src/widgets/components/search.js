import React, { Component } from "react";
import "./search.css";
const Search = (props) => (
    <form 
    className="Search"
    onSubmit={props.handleSubmit}>
        <input 
        ref={props.setRef}
        type="text" 
        placeholder="Busca tu Video Favorito" 
        className="Search-input" 
        name="search"
        onChange={props.handleChange}
        value={props.value}/>
    </form>
)

export default Search;
