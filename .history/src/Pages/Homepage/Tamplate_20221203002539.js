import React from 'react';
import '../Homepage/Tamplate.css';

const Tamplate = () => {
    return (
      <div id="large-th">
      <div class="container">
        <h1> A list of books</h1>
        <br>
        <div class="choose">
          <a href="#list-th"><i class="fa fa-th-list" aria-hidden="true"></i></a>
          <a href="#large-th"><i class="fa fa-th-large" aria-hidden="true"></i></a>
        </div>
        <div id="list-th">
          <div class="book read">
            <div class="cover">
              <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg"/>
            </div>
            <div class="description">
              <p class="title">Frankenstein<br>
                <span class="author">Mary Shelley</span></p>
            </div>
          </div>
          <div class="book read">
            <div class="cover">
              <img src="https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg"/>
            </div>
            <div class="description">
              <p class="title">A Little Princess<br>
                <span class="author">Frances Hodgson Burnett</span></p>
            </div>
          </div>
          <div class="book unread">
            <div class="cover">
              <img src="http://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/028/28129-1.JPG"/>
            </div>
            <div class="description">
              <p class="title">Roughing It</br>
                <span class="author">Mark Twain</span></p>
            </div>
          </div>
          <div class="book unread">
            <div class="cover">
              <img src="http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg"/>
            </div>
            <div class="description">
              <p class="title">Bird By Bird</br>
                <span class="author">Anne Lamott</span></p>
            </div>
          </div>
    <div class="book read">
            <div class="cover">
              <img src="http://d.gr-assets.com/books/1414348859l/23209971.jpg"/>
            </div>
            <div class="description">
              <p class="title">Girl at War</br>
                <span class="author">Sara Novic</span></p>
            </div>
          </div>
    <div class="book read">
            <div class="cover">
              <img src="http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg">
            </div>
            <div class="description">
              <p class="title">The Alchemist</br>
                <span class="author">Paulo Coelho</span></p>
            </div>
          </div>
    <div class="book read">
            <div class="cover">
              <img src="http://eastchapelhillobserver.com/wp-content/uploads/2015/02/amazondotcom.jpg">
            </div>
            <div class="description">
              <p class="title">Anne of Green Gables</br>
                <span class="author">Lucy Maud Montgomery</span></p>
            </div>
          </div>
    <div class="book read">
            <div class="cover">
              <img src="http://www.penguinbooksindia.com/sites/default/files/book_image/9780143416319.jpg">
            </div>
            <div class="description">
              <p class="title">Animal Farm</br>
                <span class="author">George Orwell</span></p>
            </div>
          </div>
    
        </div>
      </div>
    </div>
      
    );
};

export default Tamplate;