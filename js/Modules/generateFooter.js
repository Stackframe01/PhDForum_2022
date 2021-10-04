const generateFooter = block => {
    const footer = `
        <footer class="w-100 mt-2 text-center footer">
            <div class="sponsors">
                <p><a href="//itmo.ru"><img class="mx-auto d-block img-fluid" src="./img/itmo_logo_horiz_white_en.png"/></a>
                <a href="https://www.springer.com/series/8767"><img class="mx-auto d-block img-fluid" src="./img/springerlogo.jpg"/></a> </p>
                
            </div>
            <div>
                <p>©  International PhD Student Forum «Smart Learning, Smart Education, Smart Universities» - 2022</p>
                <p>Forum dates: June 20-22, Online &amp; Rhodes, Greece</p>
            </div>
        </footer>
        <noscript><div><img src="https://mc.yandex.ru/watch/68073283" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    `;

    block.insertAdjacentHTML('beforeend', footer);
};

export default generateFooter;
