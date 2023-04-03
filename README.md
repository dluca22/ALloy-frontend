# ALloyFrontend

## Current Release:
v 0.5
### Fatto:
* Sidebar tiene in elenco tutte le macchine presenti e divise in base a online/offline status
* Richiede fetching dei dati dal backend di macchine e parametri funzionali della macchina e crea "tile" per ogniuna con tabella dati
* si collega al web socket del backend per ottenere dati live dal backend
* manda una patch request per invertire status online/offline

### In lavorazione:
* gestire il messaggio di return del server chiamando un altro componente "popup" che dovrebbe flashare il messaggio a schermo ed autodistruggersi.
* aggiungere error handling alla chiamata di .patch()


### Da fare:
* a "tile" component aggiungere ngStlye directive per cambiare colore quando i parametri dei liveData sono fuori range
* aggiungere sezione reparti e statistiche
* aggiungere sezione per il log delle tabelle di archivio di "downtime", "maintenance" e "alerts"
* ?? aggiungere fetch put request quando i parametri live sono fuori dai range operazionali ?? (penso piu backend, se no non funzionerebbe l'alert logging se non c'è nessun client connesso che gestisca questa funzione)


### Roadmap MVP:
* v 1: display di tutti i reparti e toggling on/off machines + popup messages delle fetch request + error handling
* v 2: Aggiunta delle pagine per tabelle "downtime", "maintenance" e "alerts"
* v 3: aggiunta di grafici per display dati 