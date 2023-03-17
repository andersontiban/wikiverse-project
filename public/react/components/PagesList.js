import React from 'react';
import { Page } from './Page';
import {useState, useEffect} from "react";

export const PagesList = ({pages}) => {
	

	return <>
		{
		
			pages.map((page, idx) => {
				return <Page page={page} key={idx} />
			})
		}
	</>
} 
