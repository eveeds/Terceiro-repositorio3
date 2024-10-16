const url = 'http://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais

async function visualiarInformacoesGlobais(){
    
    const res = await fetch(url);
    const dados = res. json();
    const paragrafo = document. createElement('p');
    paragrafo.classList.add('graficos-container_texto');
    paragrafo.innerHTML = 'voce sabia que o mundo tem ${dados.
    total_pessoas_mundo} e que aproximadamente ${dados.
        total_pessoas_conectadas} estão conectadas em alguma rede social e passam em media &{dados.tempo_medio} horas conectadas. ';
        
  const container = document. getElementsByid('graficos-container');
  container. appendChild(paragrafo);
  visualiarInformacoesGlobais();

