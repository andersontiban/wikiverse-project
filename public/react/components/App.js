import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';


// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	//state
	const [pages, setPages] = useState([]);
	const[addArticle, setAddArticle] = useState(false);
	const[articleData, setArticleData] = useState({
			title: "",
			content: "",
			name: "",
			email: "",
			tags: ""
	});

	const[show, setShow] = useState(true);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	const handleSubmit = (e, title,content, name, email, tag) =>{
        e.preventDefault();
        setArticleData(
            {
				title: title,
			content: content,
			name: name,
			email: email,
			tags: tag
			}
        );
		console.log(articleData)
     

    }


	function Form(){

		return <div >
			<h2>Add a Page</h2>
		
			<form  onSubmit={handleSubmit}>
			
				<input type="text" placeholder="Title"  />
				<input type="text" placeholder="Article Content"  />
				<input type="text" placeholder="Author Name" />
				<input type="text" placeholder="Author Email"  />
				<input type="text" placeholder="Tags" />
				<button type="submit" onSubmit={handleSubmit}>Create a Page</button>
			</form>
		</div>
		

	}

	function handleClick(){
		setShow(!show)
		setAddArticle(!addArticle)
	}

	return (
		<main>	
      <h1>WikiVerse</h1>
			{show&& <h2>An interesting 📚</h2> }
			{show && <PagesList pages={pages} />}
			<button onClick={handleClick}>Add Article</button>
			{addArticle &&<Form/>}
		</main>
	)
}