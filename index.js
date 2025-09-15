'use script';

// 抽選ボタン

const numToPick = 5

document.querySelector('#draw').addEventListener('click', function() {
  const checkedKarutas = Array.from(document.querySelectorAll('#karuta-list input:checked'));
  const pool = checkedKarutas.map(el => el.value);

  console.log(pool);

  if(pool.length < numToPick) {
    for(let i = 0; i < numToPick; i++) {
      document.querySelector(`#result${i + 1}`).textContent = ``;
      function showImage() {
        const img = document.querySelector(`#image${i + 1}`);
        img.src = ``;
      };
      showImage();
    }

    document.querySelector('#result3').textContent = `カルタを５枚以上選択してください。`

    return ;
  }

  document.querySelector('#result3').textContent = ``

  for(let i = 0; i < numToPick; i++) {
    const random = Math.floor(Math.random() * pool.length);
    const result = pool[random];
    document.querySelector(`#result${i + 1}`).textContent = `${result}`;
    let pick = pool.splice(random, 1)[0];
    console.log(pick);

    function showImage() {
      const img = document.querySelector(`#image${i + 1}`);
      img.src = `./images/${result}.jpg`;
    };
    showImage();
  }
});



// リセットボタン
// document.querySelector('#reset-btn').addEventListener('click', function() {
//   const normalKarutas = document.querySelectorAll('.checkbox');
//   const cheatKarutas = document.querySelectorAll('.cheat');
//   for(i = 0; i < normalKarutas.length; i++) {
//     if(normalKarutas.cheat = true) {

//     }
//     normalKarutas[i].checked = true;
//   };

//   for(j = 0; j < cheatKarutas.length; j++) {
//     console.log("a");
//     cheatKarutas[j].checked = false;
//   };
// });

// 全選択ボタン

document.querySelector('#select-btn').addEventListener('click', function() {
  const el = document.querySelectorAll('.checkbox');
  for(i = 0; i < el.length; i++) {
    el[i].checked = true;
  };
});

// 全解除ボタン

document.querySelector('#unselect-btn').addEventListener('click', function() {
  const el = document.querySelectorAll('.checkbox');
  for(i = 0; i < el.length; i++) {
    el[i].checked = false;
  };
});

  // for(let i = 0; i < numToPick; i++) {
  //   let random = Math.floor(Math.random() * karutas.length);
  //   let pick = karutas.splice(random, 1)[0];
  //   console.log(pick);
  // }