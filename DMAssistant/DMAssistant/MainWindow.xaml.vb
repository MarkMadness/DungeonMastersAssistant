Class MainWindow
    Private Sub WhereIsXur_Click(sender As Object, e As RoutedEventArgs)
        'Fill in all cities that players can currently go to. Later maybe select country first then from that select city
        Dim cities As New List(Of String)({"0 Index", "The Sunken City", "Viluun", "O'lan", "Vex", "Erengard", "North Rigton", "Ashvar", "Bromwich", "Bracklewhyte", "Azurehill", "Wharfton", "Kingdom of Storms Outskirts", "Kingdom of Storms",
                                          "Duel'Tharmen", "Thrandul",
                                          "Loria, The Angel's Harbor", "[X'thul city]", "Tridenthia",
                                          "Dul'tharion's Estate", "Tarsus", "Ostrogoth", "Thrak'dan", "Huzen", "Blood Rain Arena", "Terthorn",
                                          "Bluestone Temple", "Devil's Tower", "Moonrose", "Jadestone", "Redmore Falls", "Korrizoth", "Lorbourne", "Fort Nox", "Tiravell",
                                          "Stromgar", "The Machine Factory"})
        CitySelector_txtBlock.Text = cities((36 * Rnd()) + 1)
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
