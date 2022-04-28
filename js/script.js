
// Milestone 1
// ●	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// ●	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


const app = new Vue({
    el:'#app',
    data:{
        contacts: [
            {
                id:1,
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        display:'false'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        display:'false'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        display:'false'
                    }
                ],
            },
            {
                id:2,
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        display:'false'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        display:'false'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        display:'false'
                    }
                ],
            },
            {
                id:3,
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        display:'false'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        display:'false'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        display:'false'
                    }
                ],
            },
            {
                id:4,
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        display:'false'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        display:'false'
                    }
                ],
            },
            {
                id:5,
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        display:'false'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        display:'false'
                    }
                ],
            },
            {
                id:6,
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        display:'false'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        display:'false'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        display:'false'
                    }
                ],
            },
            {
                id:7,
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        display:'false',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        display:'false',
                    }
                ],
            },
            {
                id:8,
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        display:'false',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        display:'false'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        display:'false'
                    }
                ],
            }
        ],
        currentIndex:0,
        activeContactId:1,
        mioMessaggio:'',
        cerca:'',
    },
    methods:{
        indexSelection(id){
         const index = this.contacts.findIndex((contact)=>{
             return contact.id === id
         })
         this.currentIndex = index
         this.activeContactId = id
        },
        addMioMessaggio(){
            const newMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message:this.mioMessaggio,
                status:'sent',
                display:'false'
            };
            this.contacts[this.currentIndex].messages.push(newMessage);
            this.mioMessaggio='';
            console.log(newMessage.date)
            const messaggioUtente= {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message:'OK!',
                status:'received',
                display:'false'
            }
            setTimeout(()=>{
                this.contacts[this.currentIndex].messages.push(messaggioUtente);
            },3000)
        },
        eliminaMessaggio(index){
            this.contacts[this.currentIndex].messages.splice(index,1)
        },
        showRemove: function(index,currentIndex){
           this.contacts[currentIndex].messages[index].display = !this.contacts[currentIndex].messages[index].display
        },
        lastDate(){
            const lastIndex = this.contacts[this.currentIndex].messages.length - 1;
            if(this.contacts[this.currentIndex].messages.length > 0){
                return this.contacts[this.currentIndex].messages[lastIndex].date;
            }else return
        },
        lastMessage(){
            const lastIndex = this.contacts[this.currentIndex].messages.length - 1;
            if(this.contacts[this.currentIndex].messages.length > 0){
                return this.contacts[this.currentIndex].messages[lastIndex].message;
            }else return
        }
    },
    computed:{
        filtro(){
            return this.contacts.filter((contact)=>{
                if(contact.name.toLowerCase().includes(this.cerca.toLowerCase())){
                    return true
                }else{
                    return false
                }
            })
        },
    }
})
// ●	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ●	Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// ●	Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ●	Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// ●	Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


//Milestone 5
// ●	Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

// ●	Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

