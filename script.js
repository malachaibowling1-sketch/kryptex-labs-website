const modal=document.getElementById('modal');
document.querySelectorAll('[data-modal]').forEach(b=>b.addEventListener('click',()=>modal.classList.add('show')));
document.querySelectorAll('.close,.close2').forEach(b=>b.addEventListener('click',()=>modal.classList.remove('show')));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
document.querySelectorAll('.buy').forEach(b=>b.addEventListener('click',()=>{
  const name=b.dataset.product;
  alert(`${name}\n\nCheckout is ready to connect to your payment provider. No payment was processed.`);
}));
