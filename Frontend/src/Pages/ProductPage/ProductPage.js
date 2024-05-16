import React from 'react'
import {useEffect, useReducer}from 'react'
import { getAll,search, getAllTags,getAllByTag} from '../../Services/breadService';
import {useParams} from 'react-router-dom';
import Tarjeta from '../../Components/Tarjeta/Tarjeta';
import Search from '../../Components/Search/Search';
import classes from './productPage.module.css'
import NoBusqueda from '../../Components/NoEncontre/NoEncontre';
import { useState } from 'react';
import Etiquetas from '../../Components/Etiquetas/Etiquetas';
export default function ProductPage() {
  const initialState = {
  breads: [], tags: []
  };  
  const reducer = (state , action) => {
  switch (action.type) {
    case 'BREADS_LOADED':
      return {
        ...state,
        breads: action.payload
      }
    case 'TAGS_LOADED':
      return {
        ...state,
        tags: action.payload
      }
    default:
      return state;
  }
}
  const [state, dispatch] =useReducer(reducer, initialState);
    const  {breads,tags} = state;
    const {searchTerm,tag}=useParams();
    const  [inputValue, setInputValue] = useState(false);
    const [nav, setNav] = useState(false);
    
    useEffect(() => {
      getAllTags().then(tags => dispatch({type: 'TAGS_LOADED', payload: tags}));
      const loadedBreads = tag ?  getAllByTag(tag, { showLoadingForRequest: false }) : searchTerm ? search(searchTerm, { showLoadingForRequest: false }) : getAll({ showLoadingForRequest: false });
      loadedBreads.then(breads => dispatch({type: 'BREADS_LOADED', payload: breads}))
     setInputValue(false);
     setNav(false);
   
   },[searchTerm,tag,inputValue,nav])
  return (
    < div className={classes.body}>
   
     <Search limpiar={inputValue} change={nav}/>
     <Etiquetas tags={tags}  change={()=> setNav(true)} noProducts={true}/>
      {breads.length===0 &&<NoBusqueda message='Al parecer ese todavia no lo tenemos, ¡Pronto lo veras aca! 🍞'linkText='Buscar otros panes 🥐' linkRoute='/productos/' busqueda={true} resetbusqueda={() => setInputValue(true)}/>}
     <Tarjeta breads={breads}/>
      </div>
  )
}
