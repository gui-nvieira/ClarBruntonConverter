function clarBruntonSimple(dipDir,dip){
    if (dip>90 || dip<0) return 'Erro: dip maior que 90°';
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
    if (dipDir>180 && dipDir<270) return `${dipDir+90}/${dip}SW`;
    if (dipDir>270 && dipDir<360) return `${dipDir-270}/${dip}NW`;
    else return 'Erro';
 }

function bruntonClarSimple(strike,dip,dir){
    const card= ['NE','NW','SE','SW','N','S','E','W'];
    if (dip>90 || dip<0) return 'Erro no valor do Dip Angle';
    if (!card.includes(dir)) return 'Erro de Dip Direction';
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
    if (strike===0 || strike===360 || strike===180){
        return dir=='E' ?
        '90/'+dip
        :
        '270/'+dip;
    }
    if (strike>270 && strike<360){ 
        return dir == 'NE' ?
        (strike-270)+'/'+dip 
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
    else return 'Erro';
}

//TODO proximas versoes conseguir converter tabelas
//TODO site OFFLINE para campo como aplicativo
