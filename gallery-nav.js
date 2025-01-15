document
  .getElementById('gallery-navbar')
  .addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      document
        .querySelectorAll('#gallery-navbar li')
        .forEach((item) =>
          item.classList.remove(
            'text-[#FFB200]',
            'border-b-4',
            'border-[#FFB200]'
          )
        );

      // Add 'active' class to clicked item
      e.target.classList.add(
        'text-[#FFB200]',
        'border-b-4',
        'border-[#FFB200]'
      );

      // Hide all containers
      document
        .querySelectorAll('div[id^="container"]')
        .forEach((div) => div.classList.add('hidden'));

      // Show the target container
      document
        .getElementById(e.target.getAttribute('data-target'))
        .classList.remove('hidden');
    }
  });
