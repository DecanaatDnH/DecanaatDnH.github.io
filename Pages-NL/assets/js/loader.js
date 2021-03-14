window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const transition_header = document.querySelector('.header');
    const anchors = document.querySelectorAll('a');
    setTimeout(() => {
        transition_el.classList.remove('is-active');
        transition_header.classList.remove('is-Nactive');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');
            transition_header.classList.add('is-Nactive');

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }
}