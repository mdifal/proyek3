
  let member = [
    {
      "nama": "Difa",
      "username": "@difa123",
      "img": "pic.png"
    },
    {
      "nama": "Dragon",
      "username": "@dragon321",
      "img": "dragon.jpg"
    },
    {
      "nama": "Lizard",
      "username": "@lizardian",
      "img": "lizard.jpg"
    },
    {
      "nama": "Gosling",
      "username": "@kenough",
      "img": "ryangos.jpg"
    },
    {
      "nama": "Robert",
      "username": "@juliusoppenheimer",
      "img": "oppy.jpg"
    }
  ];

  let friends = [];

  function counter() {
    const memberCounter = document.getElementById("cont_mem");
    memberCounter.innerHTML = "Member :" + member.length;
    const friendsCounter = document.getElementById("cont_follow");
    friendsCounter.innerHTML = "Follow :" + friends.length;
  }

  counter();

  function removeAllChild(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function follow(name) {
    kolom_member = document.getElementById("container_member");
    removeAllChild(kolom_member);
    kolom_follow = document.getElementById("container_follow");
    removeAllChild(kolom_follow);
    var iterate = 0;
    while (iterate < member.length) {
      if (member[iterate].nama == name) {
        friends.push(member[iterate]);
        member.splice(iterate, 1);
        break;
      }
      iterate++;
    }
    var i = 0;
    while (i < member.length) {
      createCardMember(i);
      i++;
    }
    i = 0;
    while (i < friends.length) {
      createCardFriends(i);
      i++;
    }
    counter();
  }

  function unfollow(name) {
    kolom_member = document.getElementById("container_member");
    removeAllChild(kolom_member);
    kolom_follow = document.getElementById("container_follow");
    removeAllChild(kolom_follow);
    var iterate = 0;
    while (iterate < friends.length) {
      if (friends[iterate].nama == name) {
        member.push(friends[iterate]);
        friends.splice(iterate, 1);
        break;
      }
      iterate++;
    }
    var i = 0;
    while (i < member.length) {
      createCardMember(i);
      i++;
    }
    i = 0;
    while (i < friends.length) {
      createCardFriends(i);
      i++;
    }
    counter();
  }

  function createCardMember(index) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container-fluid");

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    const colDiv = document.createElement("div");
    colDiv.classList.add("col-12", "mt-3");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardHorizontalDiv = document.createElement("div");
    cardHorizontalDiv.classList.add("card-horizontal");

    const imgWrapperDiv = document.createElement("div");
    imgWrapperDiv.classList.add("img-square-wrapper");

    const imgElement = document.createElement("img");
    imgElement.classList.add("img");
    imgElement.src = member[index].img;
    imgElement.alt = "Card image cap";
    imgElement.height = "200";
    imgElement.width = "200";

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = member[index].nama;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = member[index].username;

    const button_follow = document.createElement("button");
    button_follow.classList.add("btn");
    button_follow.classList.add("btn-primary");
    button_follow.classList.add("float-right");
    button_follow.textContent = "Follow";
    button_follow.value = member[index].nama;
    button_follow.setAttribute(
      "onclick",
      "follow('" + member[index].nama + "')"
    );

    imgWrapperDiv.appendChild(imgElement);
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(button_follow);
    cardHorizontalDiv.appendChild(imgWrapperDiv);
    cardHorizontalDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardHorizontalDiv);
    cardDiv.appendChild(document.createElement("br"));
    colDiv.appendChild(cardDiv);
    rowDiv.appendChild(colDiv);
    containerDiv.appendChild(rowDiv);
    document.getElementById("container_member").appendChild(containerDiv);
  }

  function createCardFriends(index) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container-fluid");

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    const colDiv = document.createElement("div");
    colDiv.classList.add("col-12", "mt-3");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardHorizontalDiv = document.createElement("div");
    cardHorizontalDiv.classList.add("card-horizontal");

    const imgWrapperDiv = document.createElement("div");
    imgWrapperDiv.classList.add("img-square-wrapper");

    const imgElement = document.createElement("img");
    imgElement.classList.add("img");
    imgElement.src = friends[index].img;
    imgElement.alt = "Card image cap";
    imgElement.height = "200";
    imgElement.width = "200";

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = friends[index].nama;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = friends[index].username;

    const button_follow = document.createElement("button");
    button_follow.classList.add("btn");
    button_follow.classList.add("btn-danger");
    button_follow.classList.add("float-right");
    button_follow.textContent = "Unfollow";
    button_follow.value = friends[index].nama;
    button_follow.setAttribute(
      "onclick",
      "unfollow('" + friends[index].nama + "')"
    );

    imgWrapperDiv.appendChild(imgElement);
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(button_follow);
    cardHorizontalDiv.appendChild(imgWrapperDiv);
    cardHorizontalDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardHorizontalDiv);
    cardDiv.appendChild(document.createElement("br"));
    colDiv.appendChild(cardDiv);
    rowDiv.appendChild(colDiv);
    containerDiv.appendChild(rowDiv);
    document.getElementById("container_follow").appendChild(containerDiv);
  }

  for (let i = 0; i < member.length; i++) {
    createCardMember(i);
  }
  for (let i = 0; i < friends.length; i++) {
    createCardFriends(i);
  }

