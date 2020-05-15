import jsPDF from 'jspdf'
import 'jspdf-autotable'


export default class RelAgenda {

  create(agendas){
    var report = new jsPDF('p', 'pt', 'A4');
    report.setFontSize(14)
    report.text(220, 50, 'Relatório de Agendas')

    var nameColumns = ['Id', 'Nome', 'Email', 'Telefone', 'Github']
    //Converte um array de objetos em um array de arrays
    var body = agendas.map(item => [item.id, item.nome, item.email, item.telefone, item.github])
    report.autoTable(nameColumns, body, {theme: 'grid', margin: { top: 110 }}); 

    //report.output('dataurlnewwindow');
    window.open(report.output('bloburl'), '_blank')
    //report.save('relatorio.pdf') 
  }

  
}