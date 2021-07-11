                                                     
                                                     
                                                     
                                                     
                                                    Cluster Tristan
                                                        - admin
                                                        - config
                                                        - local
                                                    Database_1 (Rezeptenliste) 
                                                        Collection_1 (Rezepte) { // Hier liegen alle Rezepte drin
                                                            "_id": "wird von Mongo vergeben"
                                                            "aktiveruser": "der sich gerade eingeloggt hat und ein Rezept erstellt hat"
                                                            "titel": "Legt der User fest, der es anlegt (von Rezept zu Rezept verschieden)"
                                                            "arbeitszeit": "Legt der User fest, der es anlegt, in min oder h "
                                                            "zutat1": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat2": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat3": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat4": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat5": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat6": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat7": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat8": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat9": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat10": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zubereitungsanweisung": "Der aktive User gibt Anweisung wie das Rezept zu machen ist"
                                                        }
                                                    Database_2 (User) {
                                                        Collection_1 (Userlist) {
                                                            "_id": "wird von Mongo vergeben"
                                                            "nutzername": "Der Nutzername der sich registriert hat"
                                                            "passwort": "Das zum Nutzername gehörigen Passowort" 
                                                        }

                                                        Collection_2 (Favoritenliste) //Hier liegen die favorisierten Rezepte/ werden dann im Verlauf mit dem aktiven User ausgegeben
                                                            "_id": "wird von Mongo vergeben"
                                                            "aktiveruser": "der sich gerade eingeloggt hat und ein Rezept erstellt hat"
                                                            "titel": "Legt der User fest, der es anlegt (von Rezept zu Rezept verschieden)"
                                                            "arbeitszeit": "Legt der User fest, der es anlegt, in min oder h "
                                                            "zutat1": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat2": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat3": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat4": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat5": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat6": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat7": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat8": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat9": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zutat10": "Legt der User fest, der es anlegt, in den typischen Rezeptgrößen (z. B TL oder g)"
                                                            "zubereitungsanweisung": "Der aktive User gibt Anweisung wie das Rezept zu machen ist"
                                                    }
                                                                
