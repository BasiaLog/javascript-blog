'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
  
  const activeArticles = document.querySelectorAll('.post.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';
  

function generateTitleLinks(){

  console.log('Wywołano funkcję generateTitleLinks');
  
  
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('Clear');
  
  let html = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);

  for(let article of articles){

   
    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log('articleId');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log('articleTitle');
    
    
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML');


    /* insert link into titleLinks */
    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;
   
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');
console.log(links);

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function generateTags(){
  console.log('Wywołano funkcję generateTags');
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles){
  
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log(tagsWrapper);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log(tag);
      /* generate html of the link */
      const linkHtml = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log(linkHtml);

      /* add generated code to html variable */
      html = html + linkHtml;
      console.log('teast1');

      /* END LOOP: for each tag */
    }

    /* insert html of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;


  /* END LOOP: for every article: */
  }
}

generateTags(); 