console.log(clarBruntonSimple(90,50));
console.log(bruntonClarSimple(45,45,'NW'));

function clarBruntonSimple(dipDir,dip){
    if (dip>90 || dip<0) return 'Erro';
    if (dip === 0 || dip === 90) {
        return dip === 90 
        ?
        'Vertical' : 'Horizontal';
    }
    if (dipDir === 0 || dipDir === 360 || dipDir === 180) {
        return (dipDir === 0 || dipDir === 360) ?
        `E-W/${dip}N`
        :
        `E-W/${dip}S`;
    }
    if (dipDir === 90 || dipDir === 270) {
        return dipDir === 90 ?
        `N-S/${dip}E`
        :
        `N-S/${dip}W`;
    }
    if (dipDir>0 && dipDir<90) return `${dipDir+270}/${dip}NE`;
    if (dipDir>90 && dipDir<180) return `${dipDir-90}/${dip}SE`;
    if (dipDir>180 && dipDir<270) return `${dipDir-90}/${dip}SW`;
    if (dipDir>270 && dipDir<360) return `${dipDir-270}/${dip}NW`;
    else return 'Erro';
 }

function bruntonClarSimple(strike,dip,dir){
//    const card= ['NE','NW','SE','SW','N','S','E','W']; ver como trabalhar os arrays para ser possível diminuir o if
    if (dip>90 || dip<0) return 'Erro no valor do Dip Angle';
    if (dir!='NE'&&dir!='NW'&&dir!='SE'&&dir!='SW'&&dir!='N'&&dir!='E'&&dir!='S'&&dir!='W') return 'Erro de Dip Direction';
//    if (dir!=) return 'Erro de Dip Direction';
    if (dip==0 || dip ==90) {
        return dip == 0 ?
        'Horizontal'
        :
        'Vertical';
    }
    if (strike===90 || strike===270){
        return dir=='N' ?
        '0/'+dip
        :
        '180/'+dip;
    }
    if (strike===0 || strike===360){
        return dir=='E' ?
        '90/'+dip
        :
        '270/'+dip;
    }
    if (strike>270 && strike<360){ 
        return dir == 'NE' ?
        (360-strike)+'/'+dip 
        :
        dir =='SW' ?
        (strike-90)+'/'+dip 
        :
        'Erro: Strike no quadr. do dip';
    }
    if (strike>0 && strike<90){
        return dir =='SE' ?
        (strike+90)+'/'+dip
        :
        dir =='NW' ?
        (strike+270)+'/'+dip
        :
        'Erro: Strike no quadr. do dip';
    }
    else return 'Erro de valores';
}

//TODO aplicar os codigos usando estruturas do DOM em HTML
//TODO proximas versoes conseguir converter tabelas
//TODO site OFFLINE para campo como aplicativo
//TODO transformar a linha 31 aplicada ao 34 para ficar mais legivel
