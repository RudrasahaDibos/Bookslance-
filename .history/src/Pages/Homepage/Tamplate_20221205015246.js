import React from 'react';
import { Link } from 'react-router-dom';
import '../Homepage/Tamplate.css';
import Buro from "../images/buro.jpg"
import chader from "../images/chader.jpg"
import charpo from "../images/charpo.jpg"
import  Dena   from "../images/Dena.jpg"
import  digital  from "../images/digital.jpg"
import dui from "../images/dui.jpg"
import japan from "../images/japan.jpg"
import jiboni from "../images/jiboni.jpg"
import kisna from "../images/kisna.jpg"
import nowka from "../images/nowka.jpg"
const Tamplate = () => {
    return (
    
  <div  className='service'>

<div class="card2">
  <img src={Buro} alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>


<div class="card2">
  <img src={chader } alt="Denim Jeans" />
  <h1 className='name'>বিভূতিভূষণ বন্দ্যোপাধ্যায়</h1>
  <p class="price">150 Tk </p>
  <p class="Category"> Category :
  শিশু-কিশোর: রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={charpo } alt="Denim Jeans" />
  <h1 className='name'>  সুকান্ত ভট্টাচার্য</h1>
  <p class="price">109 Tk </p>
  <p class="Category"> Category :
  চিরায়ত কাব্য</p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={Dena} alt="Denim Jeans" />
  <h1 className='name'>শরৎচন্দ্র চট্টোপাধ্যায়</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :

  চিরায়ত উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>


<div class="card2">
  <img src={ digital } alt="Denim Jeans" />
  <h1 className='name'>  তানভীর এ মিশুক</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={dui} alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="card2">
  <img src={japan } alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>
<div class="card2">
  <img src={jiboni } alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>
<div class="card2">
  <img src={kisna} alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>
<div class="card2">
  <img src={nowka } alt="Denim Jeans" />
  <h1 className='name'> অবনীন্দ্রনাথ ঠাকুর</h1>
  <p class="price">100 Tk </p>
  <p class="Category"> Category :
শিশু-কিশোর উপন্যাস </p>
  <p><button>Add to Cart</button></p>
</div>

<div class="car">
  <Link>See more <i class="fa-solid fa-arrow-right"></i>   </Link>
</div>

</div>       
    );
};

export default Tamplate;