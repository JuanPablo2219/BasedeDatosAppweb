let toNextAllPages = document.querySelectorAll('.to-next-page');


toNextAllPages.forEach(toNextPage => {

    toNextPage.addEventListener('click', async (e) => {
        console.log(e.target.dataset.questions);
        sessionStorage.setItem('questions', e.target.dataset.questions.toString());
    })
})

