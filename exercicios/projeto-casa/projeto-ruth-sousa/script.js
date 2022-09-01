const  btnMobile  =  document . getElementById ( 'btn-mobile' ) ;

function  toggleMenu ( evento )  {
  if  ( event . type  ===  'touchstart' )  event . preventDefault ( ) ;
  const  nav  =  documento . getElementById ( 'nav' ) ;
  nav . classList . alternar ( 'ativo' ) ;
  const  ativo  =  nav . classList . contém ( 'ativo' ) ;
  evento . atualTarget . setAttribute ( 'aria-expandido' ,  ativo ) ;
  se  ( ativo )  {
    evento . atualTarget . setAttribute ( 'aria-label' ,  'Fechar Menu' ) ;
  }  senão  {
    evento . atualTarget . setAttribute ( 'aria-label' ,  'Abrir Menu' ) ;
  }
}

btnMobile . addEventListener ( 'click' ,  toggleMenu ) ;
btnMobile . addEventListener ( 'touchstart' ,  toggleMenu ) ;