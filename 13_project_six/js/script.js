const body = document.querySelector('body')

window.addEventListener('keydown', (keys) => {
    // window.addEventListener('keypress', (keys) => {
        // window.addEventListener('keyup', (keys) => {
        // console.log(keys.charCode)
    console.log(keys.charCode)
    body.innerHTML = `
    
    <table border='2' align='center' cellpadding='6'>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr> 
  <tr>
    <td>${keys.key === ' ' ? 'Space' : keys.key}</td>
    <td>${keys.keyCode}</td>
    <td>${keys.code}</td>
  </tr>
</table>
    `
})



