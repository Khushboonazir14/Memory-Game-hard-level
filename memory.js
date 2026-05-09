 const container = document.getElementById("container");
        const cards = ["❤️","❤️","❤️","😁","😁","😁","💸","💸","💸","🧓","🧓","🧓","😀","😀","😀","🍇","🍇","🍇","🍎","🍎","🍎","🙄","🙄","🙄","😂","😂","😂","🏆","🏆","🏆","🤦","🤦","🤦","🥔","🥔","🥔"];

        let firstcard = null;
        let secondcard = null;
        let thirdcard = null;
        let lockboard = false;
        let matchedCount = 0;
        
        cards.sort(() => Math.random() - 0.5);
        cards.forEach(function (card) {
            const cardiv = document.createElement("div");
            cardiv.classList.add("cardiv");
            cardiv.innerText="?";
            cardiv.dataset.value = card;

            cardiv.addEventListener("click", function(){
                if (lockboard) return;
                if (cardiv === firstcard || cardiv === secondcard) return;
                cardiv.innerText = card;

                if(firstcard === null){
                    firstcard = cardiv;
                    return;
                }
                else if(secondcard === null){
                    secondcard = cardiv;
                    return;
                } else {
                    thirdcard = cardiv;                     lockboard = true;

                  if( firstcard.dataset.value === secondcard.dataset.value && secondcard.dataset.value === thirdcard.dataset.value) {

                    firstcard.style.visibility ="hidden";
                    secondcard.style.visibility ="hidden";
                    thirdcard.style.visibility ="hidden";
                    matchedCount++;
                    if (matchedCount === 12) {
    Swal.fire({
        title: 'Well Done Player 🏆',
        text: 'You Nailed it',
        icon: 'success',
        confirmButtonText: 'Lets Play Again',
        confirmButtonColor: '#2d3436',
        backdrop: `rgba(0,0,123,0.4)`
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload(); // Game ko reset karne ke liye
        }
    });
}
                      firstcard = null;
                        secondcard = null;
                        thirdcard = null;
                        lockboard = false;
                  } else{
                    setTimeout(()=>{
                        firstcard.innerText ="?";
                        secondcard.innerText ="?";
                        thirdcard.innerText ="?";

                        firstcard = null;
                        secondcard = null;
                        thirdcard = null;
                        lockboard = false;
                    }, 900);
                  }
                }
            })
            container.appendChild(cardiv);

        })