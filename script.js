
  const perguntas = [
    { texto: "Quando começamos a namorar?", resposta: "27/07" },
    { texto: "Qual a minha msc favorita?", resposta: "Demolition lovers" },
    { texto: "Sem energia 10111/01000", resposta: "-28.473927" },
    { texto: "Elon Musk?2508", resposta: "-49.047507" },
    { texto: "Animal", resposta: "Tubarão" },
    { 
      texto: "espectograma", 
      resposta: "One end", 
      audio: "audio/3_audio_recuperado.wav"
    }
  ];

  let indice = 0;

  const perguntaDiv = document.getElementById("pergunta");
  const inputRes = document.getElementById("res");
  const botao = document.getElementById("butao");
  const caixa = document.getElementById("caixa");

  function mostrarPergunta() {
    const p = perguntas[indice];
    perguntaDiv.textContent = p.texto;

    
    document.querySelectorAll(".midia").forEach(el => el.remove());

    if (p.audio) {
      const audio = document.createElement("audio");
      audio.src = p.audio;
      audio.controls = true;
      audio.className = "midia";
      caixa.appendChild(audio);

      const linkAudio = document.createElement("a");
      linkAudio.href = p.audio;
      linkAudio.download = "";
      linkAudio.textContent = "Baixar áudio";
      linkAudio.className = "midia";
      caixa.appendChild(linkAudio);
    }
  }


  botao.addEventListener("click", () => {
    const respostaUsuario = inputRes.value.trim();
    if (respostaUsuario.toLowerCase() === perguntas[indice].resposta.toLowerCase()) {
      alert("WOWWWWWWWWWWWWWWWWWW!");
      indice++;
      inputRes.value = "";
      if (indice < perguntas.length) {
        mostrarPergunta();
      } else {
        // Última resposta correta → mostra só texto final + vídeo
        perguntaDiv.textContent = "Pabéns";
        inputRes.style.display = "none";
        botao.style.display = "none";

        document.querySelectorAll(".midia").forEach(el => el.remove());
        
        // Adiciona vídeo centralizado
        const video = document.createElement("video");
        video.src = "videos/dn.mp4"; // caminho do seu vídeo
        video.controls = true;
        video.className = "midia";
        video.style.maxWidth = "500px"; // ajusta tamanho
        video.style.margin = "20px auto"; // centraliza com margem
        caixa.appendChild(video);
      }
    } else {
      alert("mto burra kk k.");
    }
  });

  mostrarPergunta();



