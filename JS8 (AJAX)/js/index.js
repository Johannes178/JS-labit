//The information gotten from input
function myFunction() {
  let x = document.getElementById("find").value;
  let text = "http://api.tvmaze.com/search/shows?q=" + x;
  console.log(text);
  // Starting the search.
  fetch(text)
          // Search ready.
        .then(function(answer) {
          // JSON to JS
          return answer.json();
      })
          // Taking in the data.
          .then((json) => {
            // showPicture and send data to class.
            showPicture(json);
      })
        // Error
        .catch(function(error) {
            // Error message
            console.log(error);
      });
}

function showPicture(tv) {
  const result = document.getElementById("results");
  result.innerHTML = '';
  console.log(tv);
  for (let y = 0; y < tv.length; y++) {

    // Selecting content
    const name = tv[y].show.name;
    const link = tv[y].show.url;
    const link1 = "URL LINK";
    let picture;
    if (tv[y].show.image === null) {
      picture = "data:image/png;base64,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";
    } else {
        picture = tv[y].show.image.medium;
    }
    const genre = tv[y].show.genres;
    const sum = tv[y].show.summary;
    console.log(name);
    console.log(picture);
    console.log(genre);
    console.log(sum);
    console.log(link);

    // Creating elements
    const body = document.getElementById("results");

    // Creating shells
    const shell = document.createElement("div");
    shell.setAttribute("id", "shell");
    body.appendChild(shell);

    // Picture shells
    const pictureShell = document.createElement("div");
    pictureShell.setAttribute("class", "picture");
    shell.appendChild(pictureShell);

    // Text shells
    const textShell = document.createElement("div");
    textShell.setAttribute("class", "text");
    shell.appendChild(textShell);

    // Creating elements
    const img = document.createElement("img");
    pictureShell.appendChild(img);
    const h = document.createElement("h1");
    textShell.appendChild(h);
    const p = document.createElement("p");
    textShell.appendChild(p);
    const div = document.createElement("div");
    textShell.appendChild(div);
    const a = document.createElement("a");
    textShell.appendChild(a);

    // Content for elements
    img.alt = "alt";
    img.src = picture;
    h.innerText = name;
    p.innerHTML = '<p> Genres: </p>' + genre + '<br>';
    div.innerHTML = '<p> Summary: </p> ' + sum;
    // Can't get the link to work for some reason. Will come back to it later (edit: working)
    a.href = link;
    a.innerText = link1;

    console.log("ready");
  }
}