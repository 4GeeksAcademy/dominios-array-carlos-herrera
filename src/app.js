  let pronoun = ['the', 'our','his','her'];
  let adj = ['great', 'big','small','wonderfull'];
  let noun = ['jogger', 'racoon','ass','legs','head'];

  for (let i=0; i<4; i++){
    for (let j=0; j<4; j++){
        for (let k=0; k<5; k++){
            console.log(pronoun[i]+adj[j]+noun[k]+".com");
        }
    }
  }