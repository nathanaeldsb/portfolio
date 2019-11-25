// DYNAMIC MODAL START
(function(){

	let mainContainer = document.querySelector(".modals");

		let radioList = document.querySelectorAll(".item__radio");

		// ITEMS MODALS
		let items = {

			mushrooms : { 
				name: "Mushrooms",
				content: "<p>Interesting fact about those mushrooms: they have many unknown properties that Jack could probably use in his adventure. It is said that a long time ago, fungis were much bigger than they are now. Many travelers reported seeing mushrooms growing in circle formation (Fairy rings).</p>",
				image: "mushrooms.png"
			},
			mistletoe : {
				name: "Mistletoe",
				content: `<p>Mistletoe is mainly use as a magical protection and to attract peace.</p><br><p>Some believes that putting mistletoe under your bed will ensure you will have a good night sleep! And that you will have the sweetest dreams...</p>`,
				image: "mistletoe.png"
			},
			gems : {
				name: "Gems",
				content: `<p>Asides from there beaming beauty, gems are known for their miscellaneous magical properties. They are used for talismans making and it is said that emerald may protect you from snakes.</p>`,
				image: "greengemsmodal.png"
			},
			owlFeather : {
				name: "OwlFeather",
				content: `<p>description owl</p>
						<p>tralalala</p>`,
				image: "owl.png"
			},
		}


		function itemCollect(){

			let myValue = this.value;

			let allOpenArray = document.querySelectorAll('.is-active:not(#itemPopup)');

			mainContainer.innerHTML = `<div class="itemModal is-active" id="itemPopup">
											<div class="itemModal__content">
												<figure class="itemModal__figure">
													<img class="itemModal__figure__image" 
														src="assets/img/${items[myValue].image}" 
														alt="${items[myValue].name} picture">
												</figure>
												<div class="itemModal__description">
													<p>Well found!</p>
													<br>
													<p>You just collected some ${items[myValue].name}. You may need it during your journey...</p>
													<br>
													<p>You will find it in your INVENTORY!</p>
													<br>
													${items[myValue].content}
												</div>
											</div>
										<span class="itemModal__close">&#9932;</span>
									</div>`;

			document.querySelector(".itemModal__close").addEventListener("click", function(){
				document.querySelector(".is-active").classList.remove("is-active");
			});
			
			for (let openItem of allOpenArray) {
				openItem.classList.remove('is-active');
			}
		};

		for (let radio of radioList) {
			radio.addEventListener("click", itemCollect);
		}
})()

// DYNAMIC MODAL END