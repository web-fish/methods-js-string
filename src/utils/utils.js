// Fetch data
export const callAPI = async (URL) => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(response.status);
  };
  return await response.json();
};

// IntersectionObserver
export const scrollObserver = () => {
  const sections = [...document.querySelectorAll('.section')];
  const links = [...document.querySelectorAll('.navbar__menu-link')];
  const options = {
    root: null,
    threshold: [1],
  };

  const navbarObserver = (entries) => {
    entries.forEach((elem) => {
      if (elem.isIntersecting) {
        links.forEach((el) => {
          el.classList.remove('navbar__menu-link--active');
        });
        const activeId = elem.target.id;
        const activeLink = document.querySelector(
          `.navbar__menu-link[href="#${activeId}"]`
        );
        if (activeLink) {
          activeLink.classList.add('navbar__menu-link--active');
        };
      };
    });
  };

  const sectionObserver = new IntersectionObserver(navbarObserver, options);

  sections.forEach((el) => {
    sectionObserver.observe(el);
  });
};

// Create item method
export const createItemMethod = ((data) => {
  data.forEach((el) => {
    const section = document.createElement('div');
    section.classList.add('section');
    section.setAttribute('id', `${el.id}`);
    section.innerHTML = `
    <div class="section__header">
    <h3 class="section__title">${el.title}</h3>
    <h4 class="section__subtitle">${el.subtitle}</h4>
  </div>
  <div class="section__content">
    <pre class="section__pre">
<code class="section__code"><code class="section__var">${el.var} </code>${el.code}</code>
<code class="section__console">${el.console}</code>
</pre>
    <div class="section__copy" data-tooltip="copy">
      <svg class="section__svg" width="30px" height="30px" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" fill="#494949"
          d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z" />
        <path fill="#494949"
          d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z" />
      </svg>
    </div>
  </div>
  <pre class="section__pre">
<code class="section__result">${el.result}</code>
</pre>`;
    document.getElementById('content').append(section);
  });
});

// Create item link
export const createItemLink = ((data) => {
  const unOrderedList = document.createElement('ul');
  unOrderedList.classList.add('navbar__menu');
  data.forEach((el) => {
    unOrderedList.insertAdjacentHTML('beforeend', `<li class="navbar__menu-item">
    <a class="navbar__menu-link" href="#${el.id}">${el.title}</a>
    </li>`);
  });
  document.getElementById('navbar').append(unOrderedList);
});

// Copy code to clipboard
export const copyToClipboard = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('section__copy')) {
      const copyText = e.target.closest('.section__content');
      navigator.clipboard.writeText(copyText.textContent.trim())
        .then(() => {
          const parentEl = e.target.closest('.section');
          const childEl = document.createElement('div');
          childEl.classList.add("alert");
          childEl.innerHTML = `<p class="alert__text">Сopied!</p>`;
          parentEl.append(childEl);
          setTimeout(() => {
            childEl.remove();
          }, 2000);
        })
        .catch(err => {
          console.log(err);
        });
    };
  });
};

// Scroll to up page
export const scrollUp = () => {
  const up = document.getElementById('up');
  up.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};