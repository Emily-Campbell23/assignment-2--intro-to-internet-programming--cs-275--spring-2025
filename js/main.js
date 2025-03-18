// -----------------------------------------------------------------------------
// This file includes deliberate formatting errors in order for you to verify
// that ESLint and EditorConfig are working properly. If both tools are, indeed,
// working correctly, then you’d see errors in your editor about indentation and
// improper use of footmarks instead of back ticks. When you save this file,
// your editor should strip all excess newlines and whitespace characters from
// the file. If both of these events occur, then ESLint and EditorConfig are
// working correctly.
//
// DON’T PROCEED UNTIL YOU’RE SURE ESLINT AND EDITORCONFIG ARE WORKING CORRECTLY
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const carouselSlides = document.querySelector('.carousel-slides');
    const leftArrow = document.querySelector('.carousel-navigation a:first-child');
    const rightArrow = document.querySelector('.carousel-navigation a:last-child');

    const albumData = [
      {
        "artist": "Dawn of Midi",
        "album": "Dysnomia",
        "cover_image": {
          "path": "img/123922404231ebe6a740dz.jpg",
          "alt_content": "[Dawn of Midi on stage]",
          "credit": "snackfight",
          "url": "https://www.flickr.com/photos/snackfight/12392240423/sizes/z/"
        },
        "url": "http://dawnofmidi.com/",
        "review": {
          "content": "The three guys in Brooklyn’s Dawn of Midi play a grand piano, an upright contrabass, and a drum kit...",
          "source": "Pitchfork",
          "url": "https://pitchfork.com/reviews/albums/18308-dawn-of-midi-dysnomia/"
        }
      },
      {
        "artist": "Holly Herndon",
        "album": "PROTO",
        "cover_image": {
          "path": "img/1083556245330f4918d69z.jpg",
          "alt_content": "[Holly Herndon on stage]",
          "credit": "Passetti",
          "url": "https://www.flickr.com/photos/passetti/10835562453/sizes/z/"
        },
        "url": "https://www.hollyherndon.com/",
        "review": {
          "content": "California-based electronic composer Holly Herndon considers this moment of slowly emergent machine learning on her third album...",
          "source": "The Guardian",
          "url": "https://www.theguardian.com/music/2019/may/10/holly-herndon-proto-review-4ad"
        }
      },
      {
        "artist": "Wu-Tang Clan",
        "album": "Enter the Wu-Tang (36 Chambers)",
        "cover_image": {
          "path": "img/150220590703a7dde293ez.jpg",
          "alt_content": "[Wu-Tang Clan on stage]",
          "credit": "HipHopHead",
          "url": "https://www.flickr.com/photos/hiphophead/150220590703a7dde293ez/"
        },
        "url": "https://wutangclan.com/",
        "review": {
          "content": "The importance tied to the Wu-Tang Clan‘s debut album, Enter the Wu-Tang (36 Chambers), cannot be overstated...",
          "source": "Loudsound Magazine",
          "url": "https://loudsoundmagazine.com/2018/11/20/album-review-wu-tang-clan-enter-the-wu-tang-clan-36-chambers/"
        }
      },
      {
        "artist": "Gotan Project",
        "album": "Lunático",
        "cover_image": {
          "path": "img/60260329b2194b7366z.jpg",
          "alt_content": "[Gotan Project on stage]",
          "credit": "TangoLover",
          "url": "https://www.flickr.com/photos/tangolover/60260329b2194b7366z/"
        },
        "url": "https://www.gotanproject.com/",
        "review": {
          "content": "Gotan Project has done it already and done it well, as its debut CD from 2001, La Revancha del Tango, has moved more than a million units worldwide...",
          "source": "Jazz Times",
          "url": "https://jazztimes.com/archives/gotan-project-lunatico/"
        }
      }
    ];

    let currentSlideIndex = 0;

    const displaySlide = () => {
      carouselSlides.innerHTML = ''; // Clear previous album

      const item = albumData[currentSlideIndex];

      const slide = document.createElement('div');
      slide.classList.add('slide');

      // Album image
      const img = document.createElement('img');
      img.src = item.cover_image.path;
      img.alt = item.cover_image.alt_content;

      // Album title
      const title = document.createElement('h2');
      title.textContent = `${item.artist} - ${item.album}`;
      title.classList.add('album-title');

      // Review text
      const review = document.createElement('p');
      review.textContent = item.review.content;

      // Review source link
      const source = document.createElement('p');
      const sourceLink = document.createElement('a');
      sourceLink.href = item.review.url;
      sourceLink.target = "_blank";
      sourceLink.textContent = `Source: ${item.review.source}`;
      source.appendChild(sourceLink);

      // Artist website link
      const artistLink = document.createElement('a');
      artistLink.href = item.url;
      artistLink.target = "_blank";
      artistLink.textContent = 'Visit Artist\'s Website';

      // Append everything to the slide
      slide.appendChild(title);
      slide.appendChild(img);
      slide.appendChild(review);
      slide.appendChild(source);
      slide.appendChild(artistLink);

      carouselSlides.appendChild(slide);

      toggleArrowsVisibility();
    };

    const toggleArrowsVisibility = () => {
      leftArrow.style.display = currentSlideIndex === 0 ? 'none' : 'block';
      rightArrow.style.display = currentSlideIndex === albumData.length - 1 ? 'none' : 'block';
    };

    const navigateSlide = (direction) => {
      currentSlideIndex += direction;
      displaySlide();
    };

    leftArrow.addEventListener('click', () => navigateSlide(-1));
    rightArrow.addEventListener('click', () => navigateSlide(1));

    displaySlide(); // Initial display
  });
