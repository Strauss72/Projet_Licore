// JavaScript Document

window.onload = function() {
    var arbre = '<?xml version = "1.0" encoding="UTF-8" standalone="yes" ?>\n<arbre>\n';
       $.getJSON('api/competences.php',{
                    type: 'getCompetencesValides'
                },
                function(competences){
                  for (var i = 0, len = competences.length; i < len; ++i) {
                    var competence = competences[i];
                        arbre = arbre + ('  <competence>\n' +
                        '       <id>' + competence.idCompetence + '</id>\n' +
                        '       <nom>' + competence.nomCompetence + '</nom>\n' +
                        '       <idPere>' + competence.idPereCompetence + '</idPere>\n');
                    }
                    arbre = arbre + '</arbre>';
                }).fail( function(competences, textStatus, error){
                    console.error("getJSON failed, status: " + textStatus + ", error: "+error)
                });
    document.getElementById('linkXML').onclick = function(code) {
        this.href = 'data:application/xml;charset=utf-8,'
        + encodeURIComponent(arbre);
    };
    console.log(arbre)
};
