import React from 'react';
import '../Homepage/Tamplate.css';
import Buro from "../images/buro.jpg"




const Tamplate = () => {
    return (
    
  <div  className='service'>

<div class="card2">
  <img src={Buro} alt="Denim Jeans" />
  <h1> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p>"I do believe something very magical can happen when you read a good book ."</p>
  <p><button>Add to Cart</button></p>
</div>


<div class="card2">
  <img src="/w3images/jeans3.jpg" alt="Denim Jeans" />
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."</p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src="/w3images/jeans3.jpg" alt="Denim Jeans" />
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
</div>

</div>       
    );
};

export default Tamplate;