console.log("Your index.js file is loading correctly!");


//Scroll Animation

const body = document.body;
			const progressBar = document.querySelector('.progress__bar');
			console.log(progressBar)
            const updateProgress = () => {
				let scrollPos =
					(window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
                console.log(scrollPos)
                progressBar.style.width = `${scrollPos}%`;
				requestAnimationFrame(updateProgress);
			};

			updateProgress();

// 


