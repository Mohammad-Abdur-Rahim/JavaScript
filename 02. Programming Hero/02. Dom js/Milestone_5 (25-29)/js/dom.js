
document.getElementById('post').addEventListener('click', function () {

    const text = document.getElementById('textarea');
    const commentValue = text.value;
    // console.log(commentValue);

    const comment_container = document.getElementById('comment_container');
    const newP = document.createElement('p');
    newP.innerText = commentValue;
    comment_container.appendChild(newP);

    //extra clear input
    text.value = '';
}
);