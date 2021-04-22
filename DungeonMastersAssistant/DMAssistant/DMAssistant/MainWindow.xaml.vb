Class MainWindow
    Private Sub WhereIsXur_Click(sender As Object, e As RoutedEventArgs)
        'Fill in all cities that players can currently go to. Later maybe select country first then from that select city
        Dim cities As New List(Of String)({"0 Index", "The Sunken City", "Viluun", "O'lan", "Vex", "Erengard", "North Rigton", "Ashvar", "Bromwich", "Bracklewhyte", "Azurehill", "Wharfton", "Kingdom of Storms",
                                          "Duel'Tharmen", "Reymar", "Baruc", "Thorum", "Heggral", "Bhur Darul", "Kel Badur", "Manathus", "Tymarus", "Thrandul",
                                          "Loria, The Angel's Harbor", "Requiem, the Unspoken City", "Collons", "Hierosolyma", "Dralun", "Brendenwal", "Istrus", "Callistrus", "Hartten", "Praetorium", "Rolan", "Derthona", "Augusto", "Aurinfort", "Tridenthia",
                                          "Dul'tharion's Estate", "Tarsus", "Ostrogoth", "Legion of Giants Outpost", "Thrak'dan", "Huzen", "Blood Rain Arena", "Terthorn",
                                          "Bluestone Temple", "Devil's Tower", "Moonrose", "Jadestone", "Redmore Falls", "Korrizoth", "Lorbourne", "Paythorne", "Alistar", "Shyrin", "Thurlstone", "Fort Nox", "Tiravell",
                                          "Stromgar", "The Machine Factory"}) '61 cities
        CitySelector_txtBlock.Text = cities((60 * Rnd()) + 1)
        NumberSelector_txtBlock.Text = Math.Round((49 * Rnd()) + 1).ToString + " location visited"
        Dim Spawn As Integer = Math.Round((99 * Rnd()) + 1).ToString
        If Spawn > 0 And Spawn < 6 Then
            SpawnSelector_txtBlock.Text = "Yes, Xur is here!"
        Else
            SpawnSelector_txtBlock.Text = "No, Xur is not here!"
        End If

    End Sub


    Public Sub CityArray()

    End Sub

End Class