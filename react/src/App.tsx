import { useState } from 'react'
import './App.css'
import Header from './Header';
import DogCard from './DogCard';

function App() {
  const dogs = [
    {
      name: '柴犬',
      description: '柴犬是一種原產於日本的小型狗，個性活潑、忠誠，是理想的家庭寵物。',
      image:'https://inutoyoya.com/wp-content/uploads/%E6%9F%B4%E7%8A%AC%E7%9F%A5%E5%A4%9A%E5%B0%91%EF%BC%9A%E5%BE%9E%E6%AD%B7%E5%8F%B2%E5%88%B0%E6%80%A7%E6%A0%BC%EF%BC%8C%E5%86%8D%E5%88%B0%E8%A8%93%E7%B7%B4-1024x585.jpg'
    },
    {
      name: '拉布拉多',
      description: '拉布拉多是一種友善且聰明的犬種，適合陪伴孩子，是熱門的導盲犬。',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSZxwR5wkOqiy0shnlkl2e9czSF0ok4wSig&s"
    },
    {
      name: '哈士奇',
      description: '哈士奇是一種外形像狼的狗，精力充沛且活潑，適合喜歡運動的人。',
      image: 'https://img.shoplineapp.com/media/image_clips/61712adda05eb7002364be87/original.jpeg?1634806492',
    },
    {
      name: '吉娃娃',
      description: '吉娃娃是世界上最小的狗之一，個性活潑，十分適合在小公寓裡飼養。',
      image: 'https://img.pikbest.com/wp/202406/small-grass-dogs-in-the-chihuahua_9595710.jpg!w700wp',
    },
    {
      name: '黃金獵犬',
      description: '黃金獵犬是一種溫順且聰明的狗，廣泛用於救援和治療用途，深受家庭喜愛。',
      image: 'https://img.shoplineapp.com/media/image_clips/645b545687a79200203dcda9/original.jpeg?1683706966',
    },
    {
      name: '邊境牧羊犬',
      description: '邊境牧羊犬被認為是最聰明的犬種之一，精力充沛，非常適合戶外活動。',
      image: 'https://gw.alicdn.com/imgextra/i2/1832452215/O1CN013ENKu21SEW9PjdOWW_!!1832452215.jpg_Q75.jpg_.webp',
    },
    {
      name: '馬爾濟斯',
      description: '馬爾濟斯是一種迷人的小型狗，擁有白色的絲滑毛髮，性格溫順。',
      image: 'https://essentialfoodshongkong.com/frontend/web/uploads/editor_uploads/%E9%A6%AC%E7%88%BE%E6%BF%9F%E6%96%AF_1024x680.jpg',
    },
    {
      name: '貴賓狗',
      description: '貴賓狗以其聰明和適應能力強聞名，有不同的體型（玩具型、迷你型和標準型）。',
      image: 'https://media.nownews.com/nn_media/thumbnail/2023/10/1697688222728-1830714b04194f4b840da069f5593883-576x576.webp',
    },
    {
      name: '阿拉斯加',
      description: '阿拉斯加是一種大型工作犬，力氣大且忠誠，最初用於拉雪橇。',
      image: 'https://cbu01.alicdn.com/img/ibank/O1CN01rPIS8A27vTgbOTKnl_!!2218819827859-0-cib.310x310.jpg',
    },
    {
      name: '藏獒',
      description: '藏獒是一種大型犬種，原產於西藏，性格獨立且忠誠，適合看守家園。',
      image: 'https://truth.bahamut.com.tw/s01/201106/ae0270ea845e45f3b5c71a8d917cd714.JPG',
    },
    {
      name: '鬥牛犬',
      description: '鬥牛犬有著獨特的外形和沉穩的性格，是一種友善而忠誠的伴侶犬。',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leavitt_Bulldog_4.jpg/250px-Leavitt_Bulldog_4.jpg',
    },
    {
      name: '阿富汗獵犬',
      description: '阿富汗獵犬擁有優雅的外表和長毛，原產於阿富汗，性格獨立而高貴。',
      image: 'https://k.sinaimg.cn/n/sinacn19/291/w640h451/20180417/e035-fzihnep0824353.jpg/w700d1q75cms.jpg',
    },
  ];

  return (
    <div>
      <Header />
      <main className="dog-list">
        {dogs.map((dog, index) => (
          <DogCard 
            key={index} 
            name={dog.name} 
            description={dog.description} 
            image={dog.image} 
          />
        ))}
      </main>
    </div>
  );
}

export default App;
