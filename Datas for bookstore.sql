﻿use BookstoreDB
select * from Categories
select * from Books
select * from PublishingHouses
Select * from Stock
Select * from CategoryBooks


INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Anektoda & Thënje', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Arkeologji', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Arkitekturë', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Art', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Biografi', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Ekonomi', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Enciklopedi', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Fantashkencë', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Filozofi', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Gjuhësi', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Histori', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Klasike', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Kritikë', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Mister', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Muzikë', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Novela Grafike', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Poezi', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Psikologji', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Romancë', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Shkencë', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Shkenca Natyrore', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Shkenca Teknike', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Sociologji', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Sport', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Teatër & Kinematografi', '', '2024-06-19');



--------------------------EDHE QETO SHTONI--------
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Anecdotes & Quotes', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Archaeology', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Architecture', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Art', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Biography', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Economics', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Encyclopedia', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Science Fiction', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Philosophy', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Linguistics', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('History', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Classics', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Criticism', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Mystery', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Music', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Graphic Novels', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Poetry', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Psychology', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Romance', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Science', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Natural Sciences', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Technical Sciences', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Sociology', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Sports', '', '2024-06-19');
INSERT INTO Categories (Genre, CategoryDescription, CreatioDate) VALUES ('Theater & Cinema', '', '2024-06-19');
---------------------------------------------------------------------------------------------------------------



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DECLARE @i INT = 1;
WHILE @i <= 100
BEGIN
    INSERT INTO Stock (Quantity) VALUES (@i);
    SET @i = @i + 1;
END;
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


INSERT INTO PublishingHouses (HouseName) VALUES ('Dukagjini');
INSERT INTO PublishingHouses (HouseName) VALUES ('Onufri');
INSERT INTO PublishingHouses (HouseName) VALUES ('Botimet Toena');
INSERT INTO PublishingHouses (HouseName) VALUES ('Dudaj');
INSERT INTO PublishingHouses (HouseName) VALUES ('Bota Shqiptare');
INSERT INTO PublishingHouses (HouseName) VALUES ('Pegi');
INSERT INTO PublishingHouses (HouseName) VALUES ('Naimi');
INSERT INTO PublishingHouses (HouseName) VALUES ('Fan Noli');
INSERT INTO PublishingHouses (HouseName) VALUES ('Ombra GVG');
INSERT INTO PublishingHouses (HouseName) VALUES ('Argeta LMG');
INSERT INTO PublishingHouses (HouseName) VALUES ('Uegen');
INSERT INTO PublishingHouses (HouseName) VALUES ('Albas');
INSERT INTO PublishingHouses (HouseName) VALUES ('Morava');
INSERT INTO PublishingHouses (HouseName) VALUES ('Kristalina-KH');
INSERT INTO PublishingHouses (HouseName) VALUES ('Pikëpamja');
INSERT INTO PublishingHouses (HouseName) VALUES ('Geer');
INSERT INTO PublishingHouses (HouseName) VALUES ('Phoenix');
INSERT INTO PublishingHouses (HouseName) VALUES ('Çabej');
INSERT INTO PublishingHouses (HouseName) VALUES ('Grand');
INSERT INTO PublishingHouses (HouseName) VALUES ('Botart');
INSERT INTO PublishingHouses (HouseName) VALUES ('AlbPAPER');
INSERT INTO PublishingHouses (HouseName) VALUES ('Eugen');
INSERT INTO PublishingHouses (HouseName) VALUES ('Saras');
INSERT INTO PublishingHouses (HouseName) VALUES ('Skanderbeg Books');
INSERT INTO PublishingHouses (HouseName) VALUES ('Luarasi');
INSERT INTO PublishingHouses (HouseName) VALUES ('Mesonjetorja');
INSERT INTO PublishingHouses (HouseName) VALUES ('Arba Editions');
INSERT INTO PublishingHouses (HouseName) VALUES ('Dritan');
INSERT INTO PublishingHouses (HouseName) VALUES ('Toena');
INSERT INTO PublishingHouses (HouseName) VALUES ('Prishtine 2018');
INSERT INTO PublishingHouses (HouseName) VALUES ('Efekos');
INSERT INTO PublishingHouses (HouseName) VALUES ('De Rada');
INSERT INTO PublishingHouses (HouseName) VALUES ('Printing Press');
INSERT INTO PublishingHouses (HouseName) VALUES ('Lidhja e shkrimtareve te Kosoves');
INSERT INTO PublishingHouses (HouseName) VALUES ('Koha');
INSERT INTO PublishingHouses (HouseName) VALUES ('Rozafa');
INSERT INTO PublishingHouses (HouseName) VALUES ('Botimet Fishta');
INSERT INTO PublishingHouses (HouseName) VALUES ('Bk Tirane');
INSERT INTO PublishingHouses (HouseName) VALUES ('Omsca 1');
INSERT INTO PublishingHouses (HouseName) VALUES ('Ideart');
INSERT INTO PublishingHouses (HouseName) VALUES ('A.Sh.Sh');
INSERT INTO PublishingHouses (HouseName) VALUES ('Plejad');
INSERT INTO PublishingHouses (HouseName) VALUES ('Dituria');
INSERT INTO PublishingHouses (HouseName) VALUES ('Koliqi');
INSERT INTO PublishingHouses (HouseName) VALUES ('MANIFESTA');
INSERT INTO PublishingHouses (HouseName) VALUES ('Uet');
INSERT INTO PublishingHouses (HouseName) VALUES ('Botimet Living');
INSERT INTO PublishingHouses (HouseName) VALUES ('Shtepia Botuese 55');
INSERT INTO PublishingHouses (HouseName) VALUES ('Artini');
INSERT INTO PublishingHouses (HouseName) VALUES ('Dita 2000');
INSERT INTO PublishingHouses (HouseName) VALUES ('Mediaprint');
INSERT INTO PublishingHouses (HouseName) VALUES ('Papirus');
INSERT INTO PublishingHouses (HouseName) VALUES ('Logos A');
INSERT INTO PublishingHouses (HouseName) VALUES ('Csara');
INSERT INTO PublishingHouses (HouseName) VALUES ('Riinvest');
INSERT INTO PublishingHouses (HouseName) VALUES ('Edualba');
INSERT INTO PublishingHouses (HouseName) VALUES ('Living');
INSERT INTO PublishingHouses (HouseName) VALUES ('Zenit');
INSERT INTO PublishingHouses (HouseName) VALUES ('Faik Konica');
INSERT INTO PublishingHouses (HouseName) VALUES ('Infopress');
INSERT INTO PublishingHouses (HouseName) VALUES ('Salta');
INSERT INTO PublishingHouses (HouseName) VALUES ('Vatra');
INSERT INTO PublishingHouses (HouseName) VALUES ('Vizion');
INSERT INTO PublishingHouses (HouseName) VALUES ('Eurosporti');
INSERT INTO PublishingHouses (HouseName) VALUES ('Skenderberg');
INSERT INTO PublishingHouses (HouseName) VALUES ('Fjala');
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

--Per me nis numrimrimi i id prej 1 
--DBCC CHECKIDENT ('Author', RESEED, 0);



INSERT INTO Books (ISBN, Image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123322, '159.jpg', '101 Gjëra Që Duhet Të Dini Për Kafshët', '2024-05-30T16:24:00.024Z', 51, 'Preke botën e mahnitshme e të mistershme të kafshëve, duke njohur me imtësi e kërshëri faunën e çdo habitati, që nga savana afrikane deri në pole. Mëso për krijesat që banojnë anekënd planetit dhe për mënyrën e tyre të jetesës. Zbulo më të egrat, më të çuditshmet, madje edhe ato që shkojnë pa u vënë re. Këtu ka gjithçka që duhet të njohë çdo i apasionuar pas mbretërisë së kafshëve, shoqëruar me ilustrime e kuriozitete interesante..', 3.00, '2024-05-30T16:24:00.024Z', 'Paper', 28, 35);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123321, '1.jpg', '201 Kryefabula', '2024-05-30T16:24:00.024Z', 255, 'Njeriu mundë të shkruaj tërë jetën dhe të mos arrij të botoj as njëqind pjesë nga kjo sferë e mençurisë njerëzore. Duke lexuar fabulat e tij ndjen me një kënaqësi estetike vë buzën në gaz nga rrëkezat e humorit , ironisë dhe sarkazmës.', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 27, 89);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123323, '172.jpg', 'Shpikësit E Mëdhenj', '2024-05-30T16:24:00.024Z', 123, '	Shpikësit më të mëdhenj dhe idetë e historitë e tyre, nga më të pazakonshmet, te më të dobishmet, nga më të çuditshmet, tek ato që ndryshuan përgjithmonë botën dhe zakonet njerëzore do t’ju shpalosen te ky libër, autorët e të cilit do t’ju rrëfejnë për gjenialitetin e mendjes njerëzore. Për çdo shkronjë të alfabetit do të njiheni me një shpikës dhe me shpikjen e tij më të spikatur. Kush e shpiku kinemanë? Kush e realizoi dhe si thirrjen e parë me një telefon celular? Kush e shpiku lojën me lego? Kush e shpiku telekomandën? Kush e krijoi kukullën Barbi dhe pse? Kush e shpiku radioteleskopin e parë? Po kompjuterin? Po play-stationin? Përgjigjet do t’i gjeni vetëm po të shfletoni këtë libër. Ilustrimet janë mahnitëse. ', 9.80, '2024-05-30T16:24:00.024Z', 'Paper', 28, 35);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123329, '3.jpg', '1111 Barcoleta ', '2024-05-30T16:24:00.024Z', 123, ' Vendimi më i rëndësishëm që një njeri merr çdo ditë është ai i të qënit në humor të mirë. ', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 4);


INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123367, '44.jpg', 'Pese Fytyrat E Modernitetit', '2024-05-30T16:24:00.024Z', 398, 'Ky libër ambicioz e sqarues ofron një analizë të ideve estetike dhe intelektuale që drejtuan krijimtarinë letrare gjatë 150 viteve të fundit. Calinescu, diskuton me mendjemprehtësi të rrallë dhe elegancë rreth marrëdhënieve komplekse midis konceptesh që përdoren rëndom, por rrallëherë janë përcaktuar saktësisht. Duke vepruar kështu ai u jep një ndihmë të veçantë studimeve bashkëkohore dhe kritikës. Gjithmonë ka qenë e vështirë të datohet me përpikëri shfaqja e një koncepti, aq më tepër kur koncepti në shqyrtim ka qenë gjatë gjithë historisë së tij kaq i ndërlikuar dhe kaq i aftë për të mbjellë mospajtime sa koncepti i "modernitetit"." ', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 21);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123380, '57.jpg', 'Arti Dhe Mjeshteria E Bukurise ', '2024-05-30T16:24:00.024Z', 224, ' Qëllimi i këtij libri është të hedhë dritë mbi estetikën nga disa pikëvështrime, para së gjithash, për të treguar disa ide dhe tipare themelore. Ai përfshin haptas pikëpamje vlerëgjykuese dhe polemizuese, të cilat synojnë, si të thuash, të sfidojnë vetë pedagogët e artit që të mos i pranojnë, duke formuar kështu opinionet e tyre. Për një pedagog arti, estetika lidhet kryesisht me shqyrtimin e aftësive në shkallën më të gjerë të mundshme. Kjo sepse një aftësi nuk mund të ketë vetëm kuptimin se di të bësh diçka, një përsëritje mekanike pa kuptuar gjë nga konteksti. Aftësia gjithmonë thelbësore nënkupton rrokjen e parimeve operacionale, të etikës dhe përgjegjësisë. Ajo përfshin gjithashtu të qenit i aftë t’ua komunikosh këtë aftësi të tjerëve, të udhëheqësh dhe të mësosh.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123415, '94.jpg', 'Lufta Ime  ', '2024-05-30T16:24:00.024Z', 304, ' Mos e merrni këtë libër si propagandë të nazizmit. Kjo është historia. Historia jonë dhe juaja, historia botërore. Ky libër është i ndaluar me ligj që të përdoret për te u propaganduar dhe për te u ndjekur si program për aktivitet politik dhe në këndvështrimin etiko – moral. Prandaj, mendojmë se duhet lexuar me një sy kritik për të nxjerrë mësimet e duhura që na i ka dhënë vetë gjyqi i historisë.', 17.85, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123421, '109.jpg', '50 Ide Ekonomike ', '2024-05-30T16:24:00.024Z', 209, 'Përshkrimi i Thomas Carlyle për të dhënat ekonomike që nga 1849, thjesht ka ngecur, për më mirë apo për më keq. Dikush zor se do të habitej. Ekonomia është diçka që njerzit zakonisht e venë re vetëm kur gjërat shkojnë keq. Vetëm kur një ekonomi ndodhet përballë një krize, kur mijra njerëz humbin punën, kur çmimet rriten së tepërmi ose kur bien shumë shpejt, atëherë ne i kushtojmë më shumë vëmendje subjektit të ekonomisë. Në të tilla momente, ekziston vetëm një dyshim i vogël që ky subjekt të duket i dështuar, në veçanti kur nxjerr në pah sfidat dhe pengesat me të cilat përballemi, bën të qartë realitetin se ne nuk mund të kemi çdo gjë që duam dhe ilustron faktin se krijesat njerëzore janë të papërsosura që në lindje.E vërteta, do të shtoja, në mënyrën tipike ekonomike, është shumë më pak e thjeshtë. Nëse do të ishte thjesht një studim shifrash, statistikash dhe teorish, atëherë analogjia e shkencës dëshpëruese ndoshta do të qëndronte më fort. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123422, '114.jpg', 'Auditim', '2024-05-30T16:24:00.024Z', 262, 'Liber Universitar ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 23, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123477, '156.jpg', ' Libri I Madh I Shpikjeve', '2024-05-30T16:24:00.024Z', 80, 'Shpikjet e mëdha të njerëzimit e gjejnë veten më lehtë se kudo tjetër te mendja e të vegjëlve të cilët për nga natyra janë kuriozë për të mësuar sesi funksionojnë gjërat. Ky libër është një hyrje në botën e madhe të shkencës, - dhe vjen i kuruar plot kujdes nga botuesusi për fëmijët e vegjël ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 21, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123478, '157.jpg', 'Enciklopedia Per Femije Nga A Ne Zh ', '2024-05-30T16:24:00.024Z', 384, 'Enciklopedia Per Femije Nga A Ne Zh ', 20.90, '2024-05-30T16:24:00.024Z', 'Paper', 21, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123479, '158.jpg', 'Atlas Gjeografik I Botes I Madh ', '2024-05-30T16:24:00.024Z', 144, 'Atlas modern me 60 faqe me harta, fotografi satelitore dhe peizazhe mbreselenese. ', 15.20, '2024-05-30T16:24:00.024Z', 'Paper', 63, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123482, '181.jpg', 'Mengjes Kampionesh ', '2024-05-30T16:24:00.024Z', 344, 'Shkrimtari i dështuar Kilgor Trofta dhe biznesmeni i suksesshëm Duejn Huver takohen në një festival artistik, në një qytezë të humbur të Miduestit amerikan. Prej këtij takimi, Huveri merr shtytjen e fundit drejt çmendurisë, ndërsa Trofta kthehet në figurë qendrore të letrave në Amerikë. Për Vonnegut, "Mëngjes kampionësh" është përsosja përfundimtare e mjeshtrisë së shkrimit, si dhe kritika e tij më e hidhur ndaj dështimit të "ëndrrës amerikane". ', 6.90, '2024-05-30T16:24:00.024Z', 'Paper', 31, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355489, '392.jpg', 'Dje Sot Neser ', '2024-05-30T16:24:00.024Z', 332, ' Ajo tregon jetën e saj që nga fëmijëria si një vajzë e dobët e zeshkane, e më pas, në rininë e bukur por të pasigurt, e deri në rrugëtimin që do ta çonte këtë rioshe napoletane drejt lavdisë ndërkombëtare.Historia e Loren – it i ngjan më shumë një përralle, bashkë me ballot, sprovat e rëndësishme dhe princat e kaltër. E megjithatë, pas divës së kinemasë, buzëqesh një grua e ndrojtur dhe e vendosur, që ka vuajtur shumë, ka punuar edhe më shumë, ka dashuruar me pasion të vërtetë e me doza të lehta ironie.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 7, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355650, '380.jpg', 'Kohe Ndryshimesh ', '2024-05-30T16:24:00.024Z', 332, 'Eduard Dervishi, në librin e tij të pasur me fakte, dëshmi e analiza, na jep qartazi punën e tij dhe kolegëve në harkun kohor të pothuaj 7 viteve, duke na paraqitur ngjarje, njerëz dhe dokumente origjinale autentike, veprimtarinë e individëve dhe institucioneve. Ai analizon në këndvështrimin e zgjedhur prej tij, shoqërinë shqiptare para vitit 1990 dhe të viteve 1990-1997. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 66, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355351, '381.jpg', 'Kupa E Botes Dhe Shqiperia ', '2024-05-30T16:24:00.024Z', 189, 'Ndoshta për ta kuptuar më mirë synimin e këtij libri, ja se çfarë lexohet në nënkopertinën e tij si përmbajtje e asaj që pasqyrohet në të. Ajo çka vlen edhe më posaçëm është se kësaj radhe në këtë libër është ecuria e rezultateve të 291 ndeshjeve të Kombëtares që nga themelimi i saj e deri te ndeshja e fundit. ', 9.80, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355455, '382.jpg', 'Futbollistet Shqiptare Neper Bote ', '2024-05-30T16:24:00.024Z', 189, 'Futbollistet Shqiptare Neper Bote ', 4.40, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355552, '383.jpg', ' Golat Shqiptare Ne Kupat Nderkombetare', '2024-05-30T16:24:00.024Z', 401, 'Golat Shqiptare Ne Kupat Nderkombetare ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 54, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123326, '258.jpg', 'Kujtimet E Sherlock Homlsit', '2024-05-30T16:24:00.024Z', 266, ' Kujtimet e Sherlok Holmsit” është një përmbledhje e tregimeve të Sherlok Holmsit, e botuar fillimisht në vitin 1893, nga Artur Konan Dojli.Një burrë si Sherloku ka shumë armiq: vrasës të dhunshëm, batakçinj të ulët, fantazma dashurish të vjetra, kërcënues, shkrimtarë helmues, për të përmendur vetëm disa. Por askush nuk është kaq i tmerrshëm e i fuqishëm sa profesor Moriarti. Moriarti është i vetmi, i cili mund të krahasohet me gjenialitetin e Holmsit. Është i vetmi njeri, ndoshta, që mund ta mposhtë përfundimisht detektivin e madh...', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 28, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123515, '210.jpg', 'Bioletra ', '2024-05-30T16:24:00.024Z', 287, 'Kjo teori, Bioletra, shkrimin e leximin letrar i trajton si procese te nderliqshme e te lidhura njerëzore që kanë burim individin dhe botën e tij, e jo rrethat sociale e ideologjike te kolektivit. Kjo është kërkesë që letërsia t’i kthehet natyrës së vet të vërtetë, krijimit të vlerave shpirtërore dhe shijimit e njohjës së këtyre vlerave. ', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 66, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123483, '177.png', 'Historia Pa Mbarim ', '2024-05-30T16:24:00.024Z', 223, 'Libri rrëfen historinë e Bastian Balthasar Bux, një djaloshi që gjen një libër magjik të titulluar "Historia Pa Mbarim". Ndërsa lexon, ai zbulon se mund të hyjë brenda botës së librit, Fantastica, dhe të ndërveprojë me personazhet e saj. ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 65, 16);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355653, '384.jpg', 'Legjendat E Futbollit ', '2024-05-30T16:24:00.024Z', 208, ' Legjendat E Futbollit...', 3.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123437, '130.jpg', 'Shteti Apo Tregu ', '2024-05-30T16:24:00.024Z', 354, 'Modeli i ri ekonomik i Shqipërisë dhe dilemat e tij. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 51, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123571, '274.jpg', 'Testamenti ', '2024-05-30T16:24:00.024Z', 554, 'Në një zyrë në Virxhinia, një burrë i pasur dhe i moshuar po rishkruan me tërbim testamentin e tij. Me vdekjen që i rri mbi kokë, Troi Filani kërkon teu dërgojë një kumt fëmijëve, ish – bashkëshorteve dhe të favorizuarëve të tij; kumti do të nxisë një betejë të ashpër gjyqësore dhe do të ndryshojë shumë jetë njerëzish. ', 10.95, '2024-05-30T16:24:00.024Z', 'Paper', 66, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123438, '131.jpg', 'Transformimi I Madh ', '2024-05-30T16:24:00.024Z', 283, 'Autori paraqet në këtë studim analizën e sistemit socialist dhe krizën e tij si dhe ballafaqimin me rrugën për ndërtimin e një modeli të ri socio-politiko-ekonomik sipas shembujve të vendeve të demokracive perëndimore me kapitalizëm dhe me ekonomi tregu të zhvilluar. Jo te gjithë e kanë jetuar që nga fillimi periudhën e tranzicionit, ashtu siç janë të shumtë edhe ata që nuk e kanë jetuar komunizmin dhe diktaturën, mjerimin ekonomik, shoqëror e njerëzor që e shoqëronte e që për këtë arsye nuk arrijnë të pranojnë e të kuptojnë pashmangësinë e zgjidhjeve radikale, vështirësitë, mosarritjet dhe gabimet e tranzicionit në vendin tonë. Parashtrimi i rrjedhshëm e i qartë si dhe niveli i trajtesës tregojnë më së miri dhe bindshëm se kjo përmbysje ngjalli shpresa e debate, por dhe zhgënjim e pakënaqësi me tensione sociale, në vartësi të pritshmërisë dhe njohjes së rrugës që do shkelej dhe kurajës që nevojitej për ta përmbyllur me sukses atë. ', 11.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 6);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123439, '100.jpg', 'Kombi Qe U Lind ', '2024-05-30T16:24:00.024Z', 401, ' Historia e mrekullisë ekonomike të Izraelit, një prej shteteve, që ndonëse në përmasa modeste gjeografrike, mbetet njdër vendet më të zhvilluara në botë. Libri best-seller sjell historinë e suksesit të një kombi, që arrin të tejkalojë problemet gjeopolitike për të u fokusuar në inovacionin teknologjik dhe rritjen ekonomike.', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 51, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355587, '390.jpg', 'Tartufi ', '2024-05-30T16:24:00.024Z', 154, ' Në historinë e letërsisë mbi emrin e Molierit është krijuar një konfuzion mbi dy çështje kryesore: 1. Moleri është klasicist apo realist borgjez? 2. Është ideolog i aristokracisë apo shprehës i interesave borgjeze? Disa studionjës të përmendur të veprës së Molierit ngulin këmbë se krijimtaria e tij ka karakter "feudal", se ai është rob i klasicizmit.', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 11, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123573, '276.jpg', 'Princesha Prej Akulli ', '2024-05-30T16:24:00.024Z', 398, 'E kthyer në qytetin e lindjes, pas vdekjes së prindërve, shkrimtarja Erika Falk gjen një komunitet në zgrip të tragjedisë. Vdekja e shoqes së saj të fëmijërisë, Aleksës, është vetëm fillimi. Me damarët të prerë dhe trupin të ngrirë në një vaskë akull të ftohtë, duket sikur ajo ka vrarë veten. Ndërkohë, detektivi vendor Patrik Hedstrom, ka dyshimet e veta për çështjen. Vetëm pasi fillojnë të punojnë së bashku, nis të dalë e vërteta mbi një qytet të vogël me një të kaluar thellësisht të turbullt... ', 9.70, '2024-05-30T16:24:00.024Z', 'Paper', 65, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123410, '89.jpg', ' Im Ate Pablo', '2024-05-30T16:24:00.024Z', 528, '“Si munde të ndash shtratin me atë përbindësh?”, më pyeti një nga viktimat e tim shoqi, Pablo Eskobarit. “Ishe bashkëfajtore apo viktimë? Pse s’bëre asgjë? Pse s’e le? Pse s’e denoncove?” Këto pyetje, me shumë gjasa, i bëjnë me mijëra vetë për mua. Përgjigjja është sepse e doja; megjithëse për shumë njerëz kjo është e pamjaftueshme, e vërteta është se kjo ishte arsyeja që i qëndrova pranë deri në ditën e fundit të jetës së tij, pavarësisht se janë pafund rastet kur nuk isha dakord me veprimet dhe vendimet e tij. Por e doja… ', 17.00, '2024-05-30T16:24:00.024Z', 'Paper', 21, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123440, '101.jpg', 'Asimetrite E Zhvillimit Si Shkak I Varferise ', '2024-05-30T16:24:00.024Z', 216, 'Ky libër përmban prezantimet në Forumin publik të Akademisë së Shkencava " Asimetritë e tranzicionit: Mirëqenia sociale apo varfëri ekstreme?", mbajtur më 23 prill 2015. Thanë për librin: Adresimi i asimetrive të zhvillimit të Shqipërisë është një fushë e pafund reflektimesh, studimesh, kërkimesh dhe vendimmarrjesh në fushën e politikave. Në disa raste asimetritë kanë qenë të dukshme edhe midis prioriteteve të politikave dhe prioriteteve buxhetore dhe mospërputhjeve të tjera në "leximin", programimin dhe mbështetjen e nevojave për zhvillim. ', 8.30, '2024-05-30T16:24:00.024Z', 'Paper', 51, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123541, '240.jpg', ' Shqiperia E Madhe', '2024-05-30T16:24:00.024Z', 290, 'Studiuesi i gjithëdijshëm Antonio Baldaçi na paraqitet tashmë jo si botanist, por si një historian i mirëfilltë. Përmbledhja e tij historike i përkushtohet Të madhes Shqipëri, por që në fjalorin politik të sotëm ka një ngarkesë tjetër, që edhe sikur të përdorej drejtpërdrejt nuk kishte asgjë të keqe. Ideja fillestare ishte Shqipëria Natyrale, por ja që ende nuk e kishte përdorur këtë togfjalësh Kadareja, në mënyrë që të fitonte autoritet ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 12, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123513, '208.jpg', 'Elemente Te Gjuhesise E Te Literatures Shqipe ', '2024-05-30T16:24:00.024Z', 388, 'Në këtë vepër, Çabej trajton një sërë temash që përfshijnë strukturën dhe historinë e gjuhës shqipe, duke analizuar dialektet, fonetikën, morfologjinë dhe sintaksën. Ai ofron një studim të detajuar të zhvillimit të gjuhës shqipe nga rrënjët e saj ilire deri në gjendjen moderne, duke treguar ndikimet e gjuhëve të tjera dhe evolucionin e fjalorit dhe gramatikës. ', 6.70, '2024-05-30T16:24:00.024Z', 'Paper', 53, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123480, '180.jpg', 'Marsiani ', '2024-05-30T16:24:00.024Z', 388, 'Një mision në Mars, një aksident i tmerrshëm, lufta e një njeriu për mbijetesë. GJASHTË DITË MË PARË, astronauti Mark Uatni u bë një nga njerëzit e parë që u ul në Mars. Tani, ai është i sigurt se do të jetë njeriu i parë që do të vdesë atje. Pas një stuhie të fuqishme rëre, që e detyron ekuipazhin të largohet nga planeti, me idenë se kolegu i tyre ka vdekur, Marku e gjen veten të izoluar në Mars dhe nuk ka asnjë mënyrë për t’u lidhur me Tokën që të njoftojë se është gjallë. Edhe sikur të arrinte të komunikonte, furnizimet ushqimore do t’i mbaroheshin disa vite para se në Mars të mbërrinte një mision shpëtimi. Makineritë e dëmtuara, terreni i ashpër apo edhe gabimet njerëzore, mund t’ia marrin jetën më parë. I armatosur vetëm me dijet e tij, aftësitë inxhinierike dhe sensin e humorit, që është burimi i tij i forcës, Marku fillon një luftë për mbijetesë. A do të mundet ai t’u bëjë ballë pengesave të shumta që do t’i dalin përpara? “E mrekullueshme... ', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 64, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123481, '176.jpg', 'Rruga ', '2024-05-30T16:24:00.024Z', 323, ' Bota është shkatërruar. Një burrë dhe djali i tij ecin me mund e me frikë nëpër zezimin e fundit. Synojnë drejt Jugut, drejt bregdetit. Në botën që e ka humbur dritën e vet, në ngricën që shtohet dita-ditës, ata bartin zjarrin. Kanë vetëm një pistoletë dhe vetëm një plumb për te u mbrojtur nga grabitësit, që nuk ndalojnë para asgjëje, as para kanibalizmit, as para dhunës së epërme. Fjali pas fjalie, pritet me tmerr se çfarë do ndodhë, por nuk ka se çfare të ndodhë më, e gjitha ka ndodhur, bota është shkatërruar. Në botën pas botës, iu është kthyer dinjiteti të gjitha gjërave të mira me të cilat përmbushim nevojat tona, por që në botën tonë nuk i perceptojmë drejt, pasi jemi mbuluar me to. Cormac McCarthy shkatërron botën për të krijuar një marrëdhënie njerëzore. Romani "Rruga" është një kristal i kulluar i letërsisë botërore. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 58, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (173555, '305.jpg', 'Prishtine Muza Ime ', '2024-05-30T16:24:00.024Z', 333, 'Prishtinës asnjë fjalë nuk i vjen e gënjeshtërt. Nuk ka mashtrime, as ndjenjat nuk manipulohen kur i shkruhet Prishtinës, kur shkruhet për Prishtinën. Prishtinës i mungon një lum, e prapë se prapë ajo është vet lumi i madh i plotnuar me dashuri, me lëvizje njerëzish, me blerim, me perëndime e agime, me trafik dinamik, me parqe e trunguj që me buzëqeshje përqafojnë çdo kontakt me njeriun. Sepse Prishtina dhe njeriu i saj ka kohë që jetojnë në simbiozë, nuk gjallërojnë pa njëra tjetrën, se Prishtina secilin e secilën e kthen në shkrimtar, në poet, në tregimtar, në qepës fjalësh e vargjesh. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1235559, '313.jpg', '9 Skica Psikologjike ', '2024-05-30T16:24:00.024Z', 223, ' 9 Skica Psikologjike...', 6.95, '2024-05-30T16:24:00.024Z', 'Paper', 32, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1235567, '314.jpg', 'Gjuha E Harruar ', '2024-05-30T16:24:00.024Z', 153, ' Një eksplorim në historinë e interpretimit të ëndrrave e miteve, nga letërsia primitive në veprën e Frojdit e të Jungut', 4.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1235538, '315.jpg', 'Arti I Te Dashuruarit ', '2024-05-30T16:24:00.024Z', 145, '  Libri dëshiron të bindë lexuesin se të gjitha përpjekjet e tij për dashuri janë të caktuara të dështojnë nëse ai nuk përpiqet të zhvillojë më aktivisht në mënyrë sa më të plotë personalitetin e tij, me qëllim që të arrijë një orientim produktiv', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 32, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123406, '84.jpg', 'Ahmet Zogu ', '2024-05-30T16:24:00.024Z', 388, 'Duam a nuk duam ne, ai mbetet nje karakter interesant dhe enigmatik, nje perzierje pa kriter kontradiktash te ndryshme, gjysme hero dhe gjysme bufon, per te cilin do te interesohen si grumbulluesi i fakteve historike te çuditshme, ashtu dhe studiuesi i psikologjise.  ', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 94);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123359, '36.jpg', 'Mitet E Historiografisë Arbëreshe', '2024-05-30T16:24:00.024Z', 308, ' Ky libër përmbledh e shtjellon rezultatet fillestare të një projekti kërkimor më të gjerë e organik, të miratuar e të mbështetur nga Universiteti i Palermos. Thelbi i temave të rrahura, sikur-se edhe perspektiva e kërkimit në të cilën inkuadrohen ato, ka të bëjë me një studim të strukturuar, të ndërmarrë me synimin për të rindërtuar zanafillën dhe zhvillimin e identitetit kulturor arbëresh. Do saktësuar se ajo çka paraqitet këtu është vetëm pjesa destruens e projektit. Në të vërtetë, jo vetëm që janë mënjanuar përmes një shqyrtimi kritik falsifikimet në modë të historiografisë arbëreshe, por janë bërë përpjekje për ta vendosur hipotezën e kërkimit brenda atyre caqeve epistemologjike në të cilat, nga njëra anë akribia shkencore i bashkohet gjykimit gjakftohtë, ndërsa, nga ana tjetër, “falsi” (mitik ose historik) individualizohet jo vetëm për t’u dalluar nga “e vërteta”, por edhe për t’u peshuar me drejtësi që pastaj të flaket tej përfundimisht.', 13.30, '2024-05-30T16:24:00.024Z', 'Paper', 8, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123419, '98.jpg', 'Tetedhjete Vjet Tregime ', '2024-05-30T16:24:00.024Z', 321, 'Janë tetëdhjetë rrëfime që përmbledhin një jetë, shumë përvoja, ngjarje, e pjesëza historie të shkruara me shumë nostalgji, humor e gjuhë të pakomplikuar. Janë thesar si për autoren dhe fëmijët e saj, por edhe për lexuesin e një jete të përshkruar në këto tregime që e kanë pasur një arsye edhe peshë të madhe për t’u strehuar në kujtesën e saj. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 38, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123531, '226.jpg', 'Historia E Gjuhesise ', '2024-05-30T16:24:00.024Z', 376, ' Ky vëllim synon të i japë lexuesit një pamje të përgjithshme të rrethanave historike dhe të klimës kulturore, në të cilat panë dritën teoritë e ndryshme gjuhësore. Një histori e gjuhësisë, natyrisht, por edhe një histori e kulturës, që nga zanafilla në Greqinë e Lashtë, duke vijuar përmes zhvillimeve të botës romake, Mesjetës dhe Rilindjes e deri në kohët moderne.', 11.90, '2024-05-30T16:24:00.024Z', 'Paper', 58, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123551, '253.jpg', 'Klubi Pikuik 2 ', '2024-05-30T16:24:00.024Z', 468, ' Pak nga pak, z. Uinkëll arriti te ia fitonte zemrën z. Benxhamin Alen, e madje edhe zhvilloi një bisedë miqësore me z. Bob Sojer, të cilin, i gjallëruar nga konjaku, silla dhe muhabeti, dalëngadalë e kaploi qesëndisja dhe tregoi me ngazëllim të njëmendtë një gazmore të bukur.', 16.00, '2024-05-30T16:24:00.024Z', 'Paper', 9, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123504, '195.jpg', 'Schopenhauer ', '2024-05-30T16:24:00.024Z', 152, ' Shopenhaueri është më i lexueshmi ndër tërë filozofët gjermanë. Ky libër na jep një shpjegim të ngjeshur dhe sa më përmbledhtas të sistemit të tij metafizik, duke u përqendruar në pamjet origjinale të mendimit të tij, që u shfaq si burim frymëzimi për artistë dhe mendimtarë të shumtë ', 4.80, '2024-05-30T16:24:00.024Z', 'Paper', 45, 19);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123505, '200.jpg', 'Mbi Edukimin Estetik Te Njeriut ', '2024-05-30T16:24:00.024Z', 182, '  Kontributi më i çmuar që Schiller-i i ka dhënë kulturës dhe filozofisë gjermane, janë shkrimet e tij mbi estetikën. Ai arriti të argumentonte se edukimi estetik është i domosdoshëm jo vetëm në ekuilibrin vetjak të shpiritit të cilitdo prej individëve të njerëzimit,por edhe për zhvillimin e harmonishëm të gjithë shoqërisë në tërësi..', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123336, '12.jpg', 'Dhuratë Për Njerëzimin', '2024-05-30T16:24:00.024Z', 187, 'Libër që të bën të mendosh se a je në mungesë të gjës më të rëndësishme...', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 36, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123337, '13.jpg', 'Fjalë Të Urta', '2024-05-30T16:24:00.024Z', 134, 'Fjalë të urta nga Sami Frashëri ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 37, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123522, '217.jpg', ' Mendimi Teorik Estetik I Jeronim De Rades', '2024-05-30T16:24:00.024Z', 212, 'Zhvillimit të mendimit estetik më së shumti I kontribuan menimatrët e mëdhenjë, por edhe vetë krijuesit, të cilët krahas punëve artistike praktike u morrën edhe me teorinë e artit duke e trajtuar atë në formë të trakteve e parimeve estetike. ', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 59, 12);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123338, '14.jpg', 'Gjëegjëza 2', '2024-05-30T16:24:00.024Z', 189, 'Gjëegjëza ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 11, 33);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123339, '15.jpg', ' Gjëegjëza 4', '2024-05-30T16:24:00.024Z', 185,' Gjëegjëza ', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 11, 45);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123505, '200.jpg', 'Mbi Edukimin Estetik Te Njeriut ', '2024-05-30T16:24:00.024Z', 182, '  Kontributi më i çmuar që Schiller-i i ka dhënë kulturës dhe filozofisë gjermane, janë shkrimet e tij mbi estetikën. Ai arriti të argumentonte se edukimi estetik është i domosdoshëm jo vetëm në ekuilibrin vetjak të shpiritit të cilitdo prej individëve të njerëzimit,por edhe për zhvillimin e harmonishëm të gjithë shoqërisë në tërësi..', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);


INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355658, '354.jpg', 'Fjalet E Ajshtainit', '2024-05-30T16:24:00.024Z', 198, ' Fjalët e këtyre protagonistëve të shkencës shërbejnë për t’iu futur temave të mëdha - metafora, ligjërimi, bukuria - të analizuara në pjesën e dytë. Ligjërimi i shkencës nuk mund të përjashtohet nga një nivel ambiguiteti, i quajtur “poetik”, që siguron qëndrueshmërinë. Një komunikim i efektshëm rifiton referimin me përvojën e përditshme dhe me përfytyrimin kolektiv; niveli poetik, në këtë kuptim, është thjeshtëzuar nga metaforat me të cilat shkenca dhe komunikimi i saj, është i pasur. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355449, '355.jpg', '21 Leksione Per Shekullin E 21 ', '2024-05-30T16:24:00.024Z', 384, 'Autori i dy librave më të shitur të momentit në mbarë botën, "Sapiens" dhe “Homo Deus”, Youval Noah Harari vjen me librin më të fundit në shqip, “21 leksione për shekullin e 21”. Këtu analizohen sfidat globale si epidemitë, inteligjenca artificiale, edukimi, fetë, kombet, punësimi, mjedisi, demokracia, etj., dhe ofrohen zgjidhje të cilat i shërbjenë çdo individi në epokën tone. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 21, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355434, '364.jpg', 'Kulture Kombetare Ne Kulturen Organizative ', '2024-05-30T16:24:00.024Z', 401, ' Dilema kryesore e autores është "A mund të bashkëjetojnë në paqe dhe në më shumë prosperitet individët e këtij planeti që janë të gjinive ,moshave,etnive,racave,dhe feve të ndryshme.Libri bazohet në një analizë teorike dhe mundohet të indentifikojë rreziqet dhe përfitimet që kanë njësit ekonomike të cilat përballen me diversitet kulturor . ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355535, '365.jpg', 'Studime Sociologjike ', '2024-05-30T16:24:00.024Z', 280, ' onceptet, analizat dhe teoritë e tij kanë arritur të kenë një domethënie universale në historinë e kësaj shkence, aq sa ai sot njihet si njëri nga sociologët më të mëdhenj të të gjithë kohërave. Veprat, studimet, esetë apo leksionet e tij (prej të cilave në këtë libër janë përzgjedhur më kryesoret) kanë arritur të ndikojnë më shumë se çdo mendimtar tjetër në analizën dhe kuptimin e botës moderne, të mënyrës së supremacisë së funksionimit të saj. ', 6.50, '2024-05-30T16:24:00.024Z', 'Paper', 45, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123369, '46.jpg', '50 Ide Rreth Arkitektures', '2024-05-30T16:24:00.024Z', 210, 'Ky libër flet rreth ideve kryesore, të cilat krijuan bazën e arkitekturës Perëndimore që nga koha e Greqisë së lashtë deri në ditët tona. Këto ide përfshijnë një larmishmëri fushash që nga teknologjia deri te zbukurimi, që nga planifi kimi deri te zejtaria, po ashtu që nga mëhyra si të interpretojmë të kaluarën deri se si të ndërtojmë për të ardhmen. Këto ide përfshijnë frymëzimet intelektuale që krijuan stilin Gotik mesjetar, nocionet që gjenden pas idesë së qytetit-kopësht*) si dhe inovacionet teknologjike që krijuan grataçielat. Gjysma e parë e librit trajton të kaluarën e pasur të arkitekturës, që nga zanafi lla e saj - d.m.th. stili Grek - deri në zhvillimet revolucionare të fundit të shekullit XX. Kjo pjesë tregon se si arkitektët dhe ndërtuesit krijuan jo vetëm një fond të stileve – që nga stili Klasik deri te stili Gotik – por edhe të gjitha llojet e ideve – të tilla si parafabrikimi dhe qyteti-kopësht – të cilat janë me interes për arkitektët e ditëve të sotme. Gjysma e dytë e librit fi llon me rilindjen e madhe të shekullit XX. ', 8.90, '2024-05-30T16:24:00.024Z', 'Paper', 45, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123370, '47.jpg', 'Projektimi I Konstruksioneve Arkitektonike', '2024-05-30T16:24:00.024Z', 208, 'Projektimi I Konstruksioneve Arkitektonike ', 16.70, '2024-05-30T16:24:00.024Z', 'Paper', 38, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123549, '251.jpg', ' Vajza E Kapitenit', '2024-05-30T16:24:00.024Z', 388, 'Fragment nga libri: Im atë, Andrej Grinjovi, kur kishte qenë i ri kishte shërbyer pranë kontit Minih dhe kishe dalë në pension me gradën e majorit të parë në vitin 17... Që prej asaj kohe ai kishte jetuar në fshatin e tij, në Simbirsk dhe atje ishte martuar me Avdotja Vasiljevna Ju., e cila ishte bija e një fisniku të varfër të atij vendi. Ishim nëntë fëmijë. Motrat dhe vëllezërit më vdiqën që kur ishin të vegjël. Isha akoma në barkun e nënës, kur më regjistruan si reshter në regjimentin e Semjonovskit me ndërhyrjen e majorit të gardës princit B., që ishte kushëriri ynë i parë. ', 7.00 ,'2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123550, '252.jpg', 'Mateo Falkone ', '2024-05-30T16:24:00.024Z', 242, 'Mateo Falkone është një histori e shkurtër por tejet komplekse ku në qender të veprës është vrasja e një djali 10-vjeçar nga babai i tij. ', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 53, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123351, '29.jpg', 'Grimca Nga Lashtësia', '2024-05-30T16:24:00.024Z', 125, 'Kur shpërtheu lufta midis Romakëve dhe Albanëve, Tullus Hostili, mbreti i Romakëve si dhe Metius Fufeti, mbreti i Albanëve, vendosën që ti jepnin fund luftës duke zhvilluar luftime një me një. Ndër Romakët ishin vëllezërit trinjakë, të quajtur Horacet, kishte edhe ndër Albanët trinjakë të quajtur Kuriatet. Fati i luftës, me miratimin e dy mbretërve, iu besua këtyre. Me sulmin e parë u vranë dy nga vëllezerit Romake si dhe u plagosën lehtë edhe tre vëllezërit Albanë. Horaci, i vetëm, ndonëse ishte jo i plagosur nuk guxoi të vijonte luftimin i vetëm, sepse ishte i pabarabartë një me trë, por duke bërë një arrati te rreme, i vrau një nga një armiqtë që e ndoqën pas. Më pas u kthye në Romë, ngarkuar më prenë e luftës, kur hasi me motrën, e cila ishte e fejuar me një nga Kuriatët. Kur vajza pa mbi supet e vëllait mantelin e të fejuarit - të cilin e kishte punuar vete - nisi të shkulte flokët dhe të vajtonte për djaloshin që ia kishin rrëmbyer. ', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123523, '218.jpg', 'Sociolinguistika ', '2024-05-30T16:24:00.024Z', 443, 'Vepra Sociolinguistika është përmbledhje e disa studimeve të kryera gjatë një perjudhe 16 vjeçare për çështje që lidhen me kategori e dukuri sociolinguistika. Janë variante të plota të këtyre studimeve , prej të cilave janë nxerrë kumtestat e mbajtura në konferencat e simpoziume komtare e ndërkomtare si dhe ligjeratat e mbajtura me studentët e ciklit të parë , të dytë , të tretë . ', 16.50, '2024-05-30T16:24:00.024Z', 'Paper', 51, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123352, '30.jpg', 'Jeta E Një Historiani', '2024-05-30T16:24:00.024Z', 464, 'Libri përmban nota autobiografike, duke ruajtur në këtë autobiografi fijen lidhëse me familjen e Frashërllinjve të Rilindjes Kombëtare, nga rrjedh edhe akademiku Kristo Frashëri. Në promovimin e librit, që do të mbetet si epilogu i një historiani të lavdishëm shqiptar, pritet një takim mbresëlënës me kolegët dhe gazetarët. Tërë jetën akademik Kristo Frashëri shkroi libra historike, artikuj, ese, dha intervista për çështjet më të debatueshme kombëtare, pa e vënë re asnjëherë lodhjen dhe së fundi as stërmundimin, ndërsa është në një gjendje shëndetësore ku i duhet asistencë mjekësore. Ai e sfidon edhe sëmundjen. Brenda tij gjendet një energji e jashtëzakonshme e mendjes. Të mos mendojmë sot se profesor Kristo Frashëri do të përfundojë së botuari, duke e mbyllur me “jeta e një historiani”. Kemi mësuar se dhjetëra vëllime presin ende dritën e botimit. “Jeta e një historiani”, ky libër i shkruar nga dora e Kristo Frashërit nuk është se flet për veten. Jeta e një historiani si Kristo Frashëri është një betejë për historinë e vendit të tij, një beteje për t’i dhënë ringjallje, për të ndriçuar të vërtetat historike. ', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 44, 5);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355321, '327.jpg', 'Vera Ime Pa Te Dashur ', '2024-05-30T16:24:00.024Z', 212, ' SI MUND T’I MBIJETOSH NJË VERE TË NXEHTË… KUR I DASHURI ËSHTË SHUMË LARG?1.Lëpi akullore me kaush!2. Kalo kohë me shoqet më të ngushta!3. Shko për not!4. Siguro një punë cool!5. Shmang djemtë tërheqës!6. Mos u dashuro!!!Pika NJË deri në KATËR nuk është problem.Por si është puna me pikat PESË dhe GJASHTË?', 6.50, '2024-05-30T16:24:00.024Z', 'Paper', 13, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355422, '329.jpg', 'Te Lutem Me Ler Te Te Urrej ', '2024-05-30T16:24:00.024Z', 335, 'Po sikur kjo urrejte të fshehë dashurinë? Po sikur ajo te ndjente diçka për kolegun arrogant e të përçmuar? Po sikur pas kësaj shtirjeje të tij të fshihej tjetër gjë? ', 9.95, '2024-05-30T16:24:00.024Z', 'Paper', 6, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (173656, '306.jpg', 'Mrizi I Zanave ', '2024-05-30T16:24:00.024Z', 320, 'Mrizi I Zanave... ', 2.95, '2024-05-30T16:24:00.024Z', 'Paper', 37, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123441, '102.jpg', ' Ekonomia Mbi Ceshtjet E Kines', '2024-05-30T16:24:00.024Z', 401, 'Duhet të përmbledhim me kujdes përvojën dhe mësimet e reformave ekonomike gjatë 30 viteve të fundit dhe të shikojmë se si kemi arritur deri më sot. Kjo lloj përmbledhjeje duhet të lidhet ne realitetin historik të 60 viteve të fundit, apo edhe më gjatë, dhe të vëzhgohet në kontekstin historik të Kinës dhe të botës ', 11.00, '2024-05-30T16:24:00.024Z', 'Paper', 9, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123442, '103.jpg', 'Nje Dekad E Mendimit Politik ', '2024-05-30T16:24:00.024Z', 551, ' Ky tekst, trajton tema nga fushat e prekshme të jetës, me një stil e fjalor të thjeshtë edhe për lexuesit joekonomist, me dëshirë që ai t’i kuptojë sa më thjesht gjërat që për nga vet natyra janë komplekse. Të gjitha analizat mbi bazë të fakteve e argumente të nuk janë deshira buleveardesh të një “ekonomisti popullor”, por të bazuara në metodologji konzistente dhe kohezive të trajtimit shkencor. ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 59, 3);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123577, '280.jpg', 'Engjej Dhe Djaj ', '2024-05-30T16:24:00.024Z', 480, ' Një shoqëri sekrete vëllazërimi. Një armë bërthamore shkatërruese. Një shënjestër e pabesueshme. Robert Langdoni, simbologjisti me famë botërore i Harvardit, i njohur nga lexuesi nëpërmjet romanit Kodi i Da Vinçit, këtë herë duhet të niset drejt Romës, në zbulim të një sekreti të paimagjinueshëm.', 12.00 , '2024-05-30T16:24:00.024Z', 'Paper', 56, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123585, '289.jpg', 'Ahengu Shkodran ', '2024-05-30T16:24:00.024Z', 187, 'Rreth 330 këngët që numëron repertori renditen në bazë të ''perdeve'' (makameve), në të cilat ato shtjellohen, sipas një radhe të përcaktuar që fillon me perden Dyqah, për të vazhduar pastaj me Zyl, Gjysë, Ras, etj. duke vijuar deri në perden e fundit që ishte Sabahu.  ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 61, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355448, '378.jpg', 'Historia E Kampionateve Ne Shqiperi ', '2024-05-30T16:24:00.024Z', 401, '  Një libër i këtyre viteve të futbollit shqiptar është tepër i nevojshëm, sepse nuk ka pasur asnjë dokumentim dhe arkivim të ndeshjeve dhe skuadrave në këto vite. Kështu ky libër është një shërbim të kulturës sportive të vendit tonë. Është dashur një hulumtim i gjerë dhe i vështirë në gazetat e kohës për të arritur të shfaqen skuadrat pjesëmarrëse ne kampionate, formacionet e tyre, rezultatet e ndeshjeve apo edhe fotografi të kohës. Mbi autorin Besnik Dizdari gazetar, një ndër themeluesit dhe presidenti i Shoqatës Shqiptare të Shtypit Sportiv .', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 63, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355549, '379.jpg', 'Organika Teknike Ne Futboll ', '2024-05-30T16:24:00.024Z', 401, 'Organika Teknike Ne Futboll... ', 19.95, '2024-05-30T16:24:00.024Z', 'Paper', 32, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355583, '387.jpg', ' Shkelqimi I Meteoreve', '2024-05-30T16:24:00.024Z', 198, 'Fate artistësh, fate njerëzore, jeta në artin e filmit. Shpesh ato u ngjajnë kalimit të meteorëve në qiellin e kohës, drita e të cilave ngjiz në kujtesën e njerëzimit. Eshtë forca e artit. ', 4.70, '2024-05-30T16:24:00.024Z', 'Paper', 31, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123497, '196.jpg', 'Arti I Luftes Clausewitz ', '2024-05-30T16:24:00.024Z', 501, 'Vepra mbi luften e Clausewitzit eshte aq madhore sa mbetet vepra e fundit e shkruar per luften e cila hollesisht tregon per luften dhe detajet e saj. ', 3.00, '2024-05-30T16:24:00.024Z', 'Paper', 61, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123404, '82.jpg', ' Rruga Drejt Pushtetit', '2024-05-30T16:24:00.024Z', 442, 'Një biografi ndryshe e njeriut që solli ndryshime në Nju Xhersi. Jeta e tij nga fëmijëria dhe ëndrrat për një karrierë të sukseshme, si dhe familja.... ', 9.00,'2024-05-30T16:24:00.024Z', 'Paper', 53, 68);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355486, '393.png', 'Letersia Latine ', '2024-05-30T16:24:00.024Z', 334, 'Letersia Latine...', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 2, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355688, '391.jpg', 'Te Krijosh Nje Njeri ', '2024-05-30T16:24:00.024Z', 401, 'Te Krijosh Nje Njeri... ', 3.95, '2024-05-30T16:24:00.024Z', 'Paper', 9, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123572, '275.jpg', 'Origjina ', '2024-05-30T16:24:00.024Z', 616, ' ROBERT LANGDON, profesor i simbologjisë dhe i ikonologjisë në Harvard, mbërrin në muzeun ultramodern Gugenhajm të Bilbaos për të qenë i pranishëm në një njoftim madhor – paraqitjen e një zbulimi që “do të ndryshojë përgjithmonë fytyrën e shkencës”. Prezantuesi i mbrëmjes është Edmond Kirsh, një miliarder dhe futurist dyzetvjeçar, të cilin, zbulimet mahnitëse në teknologjinë e lartë dhe parashikimet e guximshme e kanë bërë një figurë të famshme globale. Kirsh, që kishte qenë një nga studentët e parë të Langdonit në Harvard para dy dhjetëvjeçarësh, po bëhet gati të shpallë një zbulim të madh të habitshëm – një zbulim që do t’u japë përgjigje dy prej pyetjeve fundamentale të ekzistencës njerëzore. ', 15.95, '2024-05-30T16:24:00.024Z', 'Paper', 65, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123574, '277.jpg', 'Zogu Ogurzi ', '2024-05-30T16:24:00.024Z', 401, 'Fjelbaka po lë pas krahëve një tjetër dimër të heshtur. Në këtë qytezë dikush kërkon të tërheqë vëmendjen në këtë qendër të vogël të bregdetit. Cili do të ishte një rast më i mirë se një “reality show” me telekamera të vendosura gjithkund për të marrë vende dhe persona që do të hyjnë në shtëpitë e dhjetëra mijëra telespektatorëve? Propozimi është miratuar, dritat janë ndezur por mbërritja e trupës krijon jo pak rrëmujë. Madje producenti, i bindur se skandalet rrisin audiencën, argëtohet duke ushqyer tensionet mes konkurentëve.  ', 11.50, '2024-05-30T16:24:00.024Z', 'Paper', 65, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123459, '138.jpg', 'Magjiologjia ', '2024-05-30T16:24:00.024Z', 88, 'Jeni të etur të mësoni artin misterioz të magjisë? Do të jetë Merlini, dora vetë që do t’jua mësojë atë. Ky libër që ju mëson truke magjike, vjen nga viti 1588, për t’ju treguar ato sekrete që nuk e dinit as që ekzistonin. Cila është puna e një magjistari? Një pamje e plotë dhe me shpjegime të hollësishme e punishtes së tij, veglat e magjistarit, cilat janë yshtjet dhe si funksionojnë ato (që do t’i gjeni të shpjeguara edhe në libërthat që ndodhen brenda librit), cilat janë kafshët magjike dhe shumë e shumë kureshti të tjera mahnitëse. Në libër do të gjeni një sërë simbolesh që fshehin kode që duhen deshifruar, një top kristali të shndritshëm, një hartë botërore të vendndodhjes së magjistarëve, libërtha që shpjegojnë se si mund të përdoren formulat magjike, një dragua të lëvizshëm që mund ta mbani në qafë dhe që ju ndihmon të gjeni kafshët magjike, një pako me tetë karta për të zbuluar të ardhmen, puplën e feniksit dhe së fundi, një mesazh të Merlinit, posaçërisht për ju! ', 24.90, '2024-05-30T16:24:00.024Z', 'Paper', 28, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123460, '139.jpg', 'Libri I Shpikjeve Te Medha ', '2024-05-30T16:24:00.024Z', 122, '100 shpikje që ndryshuan botën, që nga shpikja e rrotës e deri te videolojërat. Një libër i pazakontë që na njeh me shpikjet që kanë bërë histori, duke na treguar se edhe zbulimi më i vogël mund t’u hapë rrugë shpikjeve të rëndësishme. Do të mahniteni kur të mësoni se si kanë lindur idetë e mëdha dhe si u zhvilluan ato, që nga makinat e avionët, te shtypi i shkruar, që nga llamba elektrike, tek antibiotikët, nga kitara elektrike, te xhinset. Libri është i ndarë në pesë kapituj, që grupojnë shpikjet e pesë fushave. Çdo shpikje trajtohet në thellësi: si lindi, cilat janë shpikjet e tjera të ngjashme me të, si e ndryshoi botën ajo, si funksionon, si dhe për cilat shpikje të mëtejshme e hapi udhën. Informacioni është i përmbledhur dhe i trajtuar thjesht, që fëmijët ta përthithin me lehtësi. ', 12.95, '2024-05-30T16:24:00.024Z', 'Paper', 28, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123561, '262.jpg', 'Nga Kafka Te Kafka ', '2024-05-30T16:24:00.024Z', 441, 'Nga Kafka Te Kafka eshte nje liber kritik... ', 9.80, '2024-05-30T16:24:00.024Z', 'Paper', 66, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355673, '343.jpg', 'Bioprodhimtaria Dhe Fotosinteza ', '2024-05-30T16:24:00.024Z', 188, ' Pjesë nga libri: Kërkimet në fushën e fotosintezës nxiten jo vetëm nga kurioziteti, por edhe nga besimi se ato shërbejnë si mundësi për shtimin e prodhimtarisë bujqësore. ', 2.70, '2024-05-30T16:24:00.024Z', 'Paper', 44, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355474, '344.jpg', ' Interneti Dhe Shoqeria', '2024-05-30T16:24:00.024Z', 405, 'Ekziston një distancë (shumë të tjerë përdorin edhe termin “humnerë”) gjithnjë në rritje , midis evulucionit teknologjik dhe atijë social-kulturor. Ështe pikërisht ky boshëllyk ai që do të shkaktojë gjithnjë pabarazi të mëdha , aq sa në gjuhen e ekonomisë , atom und të prodhojnë efekte të dëmshme e të paimagjinuara në ekonomitë tradicionale . Nëse mbetesh prape në këtë sfide socio-kulturore , rrështitja e një vendi në zhvillim e sipër në një vend të botës së tretë ose të katërt është shumë më e shpejtë dhe më katastrofale se më parë . ', 12.90, '2024-05-30T16:24:00.024Z', 'Paper', 45, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355575, '345.jpg', 'Powerpoint Programi Per Prezantime Moduli 6 ', '2024-05-30T16:24:00.024Z', 96, 'Power Point-i është program që përdoret për krijimin e dokumenteve me qëllim të prezantimit të informative të ndryshme . Ky program gjendet në kuader të pakos së programeve aplikative Microsoft Office . Si rezultat I këtij integrimi , Power Point eka gjithashtu mundësinë e komunikimit dhe shkëmbimit të të dhënave me programet e tjera të Office-it , siç janë : Word , Excel , etj. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 43, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123349, '26.jpg', 'Beteja E Kosoves 1389', '2024-05-30T16:24:00.024Z', 200, 'Beteja e Fushë-Kosovës e vitit 1389 ishte më e rëndësishmja jo vetëm për nga përmasat, por edhe nga rrjedhojat e saj. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 44, 32);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123552, '254.jpg', 'Silvia ', '2024-05-30T16:24:00.024Z', 183, ' Novela rrëfen për dashurinë e personazhit kundrejt tre grave (Silvia, Adriana dhe Aurelia) të cilat i dëshiron të treja pa mundur që të zgjedhë, e ndaj në fund i humbet të treja. Historia nis kur një paragraf gazete e zhyt në kujtimet e rinisë personazhin e njëkohësisht rrëfyesin e historisë. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 12, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123588, '292.jpg', '200 Kenge Nga Opusi Muzikor I Kantautorit Ilir Shaqiri ', '2024-05-30T16:24:00.024Z', 401, '200 Kenge Nga Opusi Muzikor I Kantautorit Ilir Shaqiri ', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355444, '374.jpg', 'Mjekesia Sportive ', '2024-05-30T16:24:00.024Z', 282, ' Ky libër u karakterizua më përmbajtje shkencore, por që ka edhe një rëndësie të veçantë në edukimin sportiv. Rexhaj ka thënë se ky libër sa është human aq edhe ekologjik.', 13.00, '2024-05-30T16:24:00.024Z', 'Paper', 65, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355545, '375/2.jpg', 'Topi Nen Pushtetin E Tyre ', '2024-05-30T16:24:00.024Z', 289, 'Topi Nen Pushtetin E Tyre,... ', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 64, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355646, '376.jpg', 'Maratonomaku Nga Shkodra ', '2024-05-30T16:24:00.024Z', 301, 'Burrave të rritur me ninullat e Rozafës… Shkodrës sime. – Autori ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 60, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355684, '388.jpg', 'Eskili Ne Proze ', '2024-05-30T16:24:00.024Z', 180, 'Leximi i poezisë dramatike të Eskilit, Sofokliut dhe Euripidit, që shijohen e studiohen prej shekujsh në mbarë botën, kërkon përgatitje kulturore dhe njohje të mitologjisë e të historisë antike, çka arrihet me mund dhe në një moshë të caktuar. Por në traditën letrare të botës, për të përqasur edhe të vegjlit me kryeveprat e lashtësisë, për tua bërë të lehtë hyrjen në mrekullinë e poetëve të pavdekshëm, për të zgjuar kënaqësi estetike dhe formim artistik, përdoret paraqitja në prozë, siç ka bërë me besnikëri, me shumë shije, freski dhe përkushtim Janis Benekos. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 62, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355347, '377.jpg', 'Te Flasim Per Futbollin Platini ', '2024-05-30T16:24:00.024Z', 436, ' Një forcë më shtynte drejt futbollit, i cili do të bëhej qëllimi i jetës sime. Duhet të shtoj: i të gjithë ekzistencës sime. Lojtar, imazh reklamash, njeri i medias, seleksionues, konsulent, president i Kupës së Botës, president i UEFA – s dhe kjo nuk është e gjitha. Kjo është forca ime, qëllimi im: shënimi i golit. Të shënosh një gol në fushën e lojës dhe, përtej kësaj, në fushat e betejës së jetës. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 58, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355385, '389.jpg', 'Nata Dhe Cdo Te Beje Me Kete Liber ', '2024-05-30T16:24:00.024Z', 200, ' Shkrimeve në prozë e atyre poetike, që i dhuruan famën, Saramago u vë përkrah shkrimet dramatike, ku procesi krijues u nënshtrohet po të njëjtave parime, që mbajnë më këmbë pjesën tjetër të prodhimtarisë së tij, kjo e fundit e bazuar në ndërthurjen mes kohës historike e kohës së trillimit.', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 30, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1735563, '310.jpg', ' Poezi Fernando Pessoa', '2024-05-30T16:24:00.024Z', 120, ' Poezi nga Fernando Pessoa', 5.95, '2024-05-30T16:24:00.024Z', 'Paper', 57, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123499, '190.jpg', 'Per Francen ', '2024-05-30T16:24:00.024Z', 108, ' Për Francën është një tekst profetik turbullues, me një aktualitet përvëlues, ku përshkruhen me detajet më imcake simptomat e një vdekjeje të lajmëruar, ato të qytetrimit tonë perëndimor… ', 4.95, '2024-05-30T16:24:00.024Z', 'Paper', 63, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123407, '85.jpg', 'Tirana E Nones ', '2024-05-30T16:24:00.024Z', 333, ' Ato ishin tri plaka që më shënjuan fëmijërinë. Investuan gjithçka iu kishte mbetur nga dekada të trazuara të jetës, te një fëmijë; rrëfimet e mrekullueshme për qytetin, pushtetin, fuqinë, dështimin, modestinë dhe zvetënimin. Sot mendoj se kishin nevojë t’ia thoshin dikujt. Ishte një lloj borxhi që e mora përsipër, pa e ditur. Me besimin se një ditë do ua tregoja sa më shumë njerëzve. Dhe po e bëj me këtë libër. Kjo histori është kaq magjepsëse, kaq ndryshe, por edhe kaq e njohur njëherazi ', 11.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 67);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123524, '219.jpg', 'Hyrje Ne Teorite E Medha Te Romanit ', '2024-05-30T16:24:00.024Z', 304, ' Sot, ka një pandehmë të përgjithshme se romani po përjeton një krizë identitare. Sado që unë nuk pajtohem me këtë pohim, më duhet ta përdor për të theksuar një tjetër kualitet të tekstit të Chartier: Tregon sesi romani nuk është në krizë dhe se identiteti i vetëm i vërtetë i romanit, është të qenit i padefinueshëm qartë. Prandaj, teksti i tij, me të gjitha standardet, përbën një përmbledhje teorike shumë të nevojshme dhe një hyrje të njëmendtë në teoritë e romanit. Kjo vlen veçanërisht për studentët dhe studiuesit e rinj shqiptarë që duhet të çlirohen nga pozat, ashtuqë të bëjnë letërsi të mirëfillit.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 3, 19);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123542, '241.jpg', 'Qytetet Dhe Qytezat Ilire 1 ', '2024-05-30T16:24:00.024Z', 558, 'Qyteti ilir dokumentohet që në shekujt e 6/5të p.e.s. Hekateu (550-476 p.e.s.) përmend qytetet Adria,Iapygia, Oidantion, Orikos, qytetet kaone Buthrot dhe Baiake dhe qytetin taulant Sesareth. Skylaksi (shek. i 6të p.e.s.), referon qytetet liburne Idassa, Attienites, Dyyrta, Aloupsoi, Olsoi, Pedetai, Hemionoi, qytetet neste dhe enkeleje Buthoe dhe Rizon dhe qytetet taulante/orike Amantia dhe Orikon. Më tej, Thukididi (460-400 p.e.s.) përmend qytetin e Epirit Myon dhe Herodori kryeqendrën e federatës së kasopëve, Kassope. Përmbledhtas, katër autorë të shek. të 6/5 të p.e.s. përmendin 17 qytete të shpërndara njëtrajtësisht në hapësirën ilire, nga skaji më verior, gadishulli i Istrias, në skajin më jugor, gjirin e Ambrakisë. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 44, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123576, '279.jpg', 'Gurskalitesi ', '2024-05-30T16:24:00.024Z', 532, ' Qyteti i izoluar i Fjelbakës ka parë jo pak tragjedi, por ndoshta asnjë aq të tmerrshme sa ajo e vajzës së vogël të gjetur në rrjetën e një peshkatari. Dhe kjo nuk ishte një mbytje aksidentale… Detektivi i zonës, Patrik Hedstromi, sapo është bërë baba. Është detyra e tij e vështirë të zbulojë se kush qëndron mbrapa vdekjes së një fëmije që, si ai, po ashtu edhe partnerja e tij, Erika, e njihnin mirë. Por ai nuk e di se kjo çështje do të depërtojë në zemrën e errët të Fjelbakës dhe do ta grisë ndoshta përgjithmonë fasadën e saj idilike…', 10.90, '2024-05-30T16:24:00.024Z', 'Paper', 56, 12);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123586, '290.jpg', 'Fuge Per Violine ', '2024-05-30T16:24:00.024Z', 242, ' ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 51, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123527, '222.jpg', 'Monologu I Prijesit ', '2024-05-30T16:24:00.024Z', 437, 'Ikim me plagë nga Kosova Nëpër gjithë atë motë të pabesë Thelle në Alpet e Shqipërisë; Vetëm atje mbrmjet I jepin freski historisë. Ndjeheshim të sigurtë mbi kreshtat e shqipës E bukura nuk kishte asnjë vrag! Atje s’arrinin armiqtë ndër shekuj; Ajo ishte vendlindja e perendive parahistorike, Modernia e metologjisë fillonte atje Ishte hapsirë e shenjëtuar për skipetarë. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 63, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123556, '261.jpg', 'Narratori ', '2024-05-30T16:24:00.024Z', 269, ' Ajo që magjeps Benjaminin është jo ideja, por fenomeni. Ndaj, ku përcaktohet se e magjepsi doktrina e superstrukturës e skicuar përmbledhtazi nga Marksi, gjendet fill më pas apo merret e mirëqenë që te kjo lidhje me materien atij i interesonte sesi shpirti dhe shpërfaqja lëndore lidheshin aq ngushtë sa bëhej logjike të zbuloje gjithkund ’correspondances’ alla Bodler, e që në lidhjen mes tyre sqarojnë dhe ndriçojnë njëra-tjetrën, sa në fund të mos kenë nevojë për sqarim interpretues', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 31, 78);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123518, '213.jpg', 'Vepra ', '2024-05-30T16:24:00.024Z', 280, 'Nevruzi dhe Tradhëtia ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 49, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123436, '128.jpg', 'Kontabiliteti I Drejtimit ', '2024-05-30T16:24:00.024Z', 282, 'Ky libër  jep informacion të detajuar të kostos i cili është i nevojshëm për menagjimin për të kontrolluar operacionet aktuale dhe klanin për të ardhmen. ', 32.00, '2024-05-30T16:24:00.024Z', 'Paper', 26, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123503, '194.jpg', ' Antikrishti', '2024-05-30T16:24:00.024Z', 181, ' Është vepra jo vetëm më e debatuar por edhe me e shumë-studiuar e Niçes nëpër auditorët e dhe katedrat universitare.E shkruar si një përmbledhje shënimesh gjatë periudhës kur autori po ngjizte kryeveprën e vet "Kështu foli Zarathustra", ajo jo vetëm u drejtohet atyre që e kuptojnë këtë mendim, por edhe është një pikënisje e rëndësishme për të arritur e kuptuar atë. Pavarësisht se është anatemuar dhe admiruar po njëlloj, leximi i saj është një domosdoshmëri për cdo njeri që do të dijë fatet apo ardhmërinë e racës njerëzore. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123514, '209.jpg', 'Studimet Mbi Strukturen E Shqipes Ne Brss ', '2024-05-30T16:24:00.024Z', 266, ' Albanologjia e mirëfilltë ne BRSS u zhvillua pas Luftës së Dytë Botërore dhe lidhet ngushtë me emrin e albanologes së shquar A. V. Desnickaja. Në fillim të viteve ’90 të shekullit XX përfundon periudha sovjetike. Me këtë përputhet edhe veprimtaria e A. V. Desnickajas. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123540, '239.jpg', 'Endrra Dhe Zhgenjime ', '2024-05-30T16:24:00.024Z', 208, 'Duke mbyllur këtë rrëfim për jetën, kthej kokën mbrapa të shoh gjurmët e saj. Ato ngjajnë si një lëndinë herë e blertë. herë e shkretë, si ëndrra të trazuara, shpresa të thyera që, si një përrallë, shfaqen e zhduken pa fund. Por, jeta gjithsesi është e bukur dhe duhet jetuar. Duke e mësuar njeriun që, edhe nga mizoritë të nxjerrë mësim njerëzor, edhe nga fanatizmi, tolerancë të vërtetë, nga gabimet vigjilencë dhe nga gënjeshtra respekt të pafund për të vërtetën. Këto e bëjnë kuptimplotë thënien e Santayanas: "Ata që nuk janë në gjendje të kujtojnë përvojën, janë të dënuar ta përsërisin atë. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 9, 12);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123516, '211.jpg', 'Sistemi Rasor I Emrave Te Shqipes ', '2024-05-30T16:24:00.024Z', 472, '"Sistemi Rasor I Emrave Të Shqipes" nga Kolec Topalli është një studim i detajuar dhe i specializuar mbi sistemin emëror të gjuhës shqipe. Kolec Topalli, një linguist dhe studiues i njohur shqiptar, në këtë vepër shqyrton në mënyrë të thelluar dhe sistematike emrat në gjuhën shqipe, duke analizuar strukturën, funksionet dhe përdorimet e tyre. ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123547, '249.jpg', 'Tregime  nga  shekspiri ', '2024-05-30T16:24:00.024Z', 288, ' Në këtë vëllim janë përfshirë dymbëdhjetë tregime, që u përgjigjen dymbëdhjetë kryeveprave të kolosit të letërsisë angleze, Shekspirit. Lexuesit e rinj do të familjarizohen me përmbajtjen e këtyre veprave dhe kur të rriten, do të shijojnë më mirë veprat origjinale', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355354, '351.jpg', 'Njerezimi ', '2024-05-30T16:24:00.024Z', 401, ' Liber i cili eksploron natyrën njerëzore dhe argumenton se njerëzit në thelb janë të mirë. Në këtë libër, Bregman kundërshton shumë nga narrativat tradicionale që shohin njerëzimin si të prirur për egoizëm dhe dhunë, duke ofruar prova historike, shkencore dhe psikologjike për të mbështetur pikëpamjen e tij optimiste.', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 21, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123457, '136.jpg', 'Enciklopedia Ime 6 10 Vjec ', '2024-05-30T16:24:00.024Z', 172, 'Këtu gjen të mbledhura së bashku temat kryesore të dijes, për të kuptuar gjithçka për botën rreth nesh! UNIVERSI / TRUPI I NJERIUT / HISTORIA / TOKA / BIMËT / KAFSHËT / BOTA SOT / ARTET / SHKENCA DHE TEKNIKA. Me qindra ilustrime të ndryshme, që kureshtarët e vegjël të zbulojnë botën rreth tyre. Libri është për moshat 6-10 vjeç ', 19.00, '2024-05-30T16:24:00.024Z', 'Paper', 13, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123458, '137.jpg', 'Piratologjia ', '2024-05-30T16:24:00.024Z', 87, 'Ç’do të ndodhte nëse në det do të gjendej një sënduk, i cili duke qenë i izoluar me katran, ka mbetur i pacenuar për shekuj me radhë? Po nëse brenda tij do të gjendej ditari i kapiten Uilliam Luberit, gjuajtës piratësh? Do të ndodhte që shumë mistere të piratëve do të zbuloheshin dhe një jetë e panjohur që mban era thesar do të vinte gjer në ditët tona, me një magji të pamohueshme, nën titullin “Piratologjia”. Libri që është shitur në të gjithë botën në më shumë se 5 milionë kopje, do t’ju çojë në shekullin XVIII, atëherë kur kapiten Luberi ishte vënë në ndjekje të Tmerrit të Deteve, pirates Arabela Drumond. Në këtë udhëtim do të përballeni me stuhitë, ndërsa lundroni drejt ishujve të thesarit, nën flamurin pirat. Një libër i jashtëzakonshëm për piratologët, që ka në brendësi informacione të shumëllojshme për këtë botë joshëse të së shkuarës. ', 23.00, '2024-05-30T16:24:00.024Z', 'Paper', 28, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1735541, '308.jpg', 'Enderrime ', '2024-05-30T16:24:00.024Z', 220, 'Enderrime ', 1.95, '2024-05-30T16:24:00.024Z', 'Paper', 37, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123570, '271.png', 'Gjuha ', '2024-05-30T16:24:00.024Z', 401, 'Gjuha ska dyshim , është një nga vecoritë më të rëndësishme të njeriut . Në mesin mijëra llojeve të shtazëve njeriu është zotërues I gjuhës. Cdo lloj mjeti që përdoret për të shprehur qëllimin duhet ti thuhet gjuhë. ', 2.95, '2024-05-30T16:24:00.024Z', 'Paper', 59, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123347, '24.jpg', 'Antropologjia Politike', '2024-05-30T16:24:00.024Z', 114, 'Libri që mban titullin “Antropologjia politike” i autorit Gjon Keka, para së gjithash duhet parë si një përpjekje e guximshme dhe serioze e autorit për të hapur një perspektivë të re të mendimit politik te ne. Teksti i tij mund të lexohet edhe si një sugjerim i duhur që kurikulat e sociologjisë dhe të shkencave politike te ne të pasurohen me dimensionin e domosdoshëm të antropologjisë politike. ', 4.40, '2024-05-30T16:24:00.024Z', 'Paper', 21, 22 );
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123348, '25.jpg', 'Antropologjia Social Kulturore', '2024-05-30T16:24:00.024Z', 168, ' E vazhduam shkëmbimin e ideve edhe pasi dolëm të punonim në terren – një praktikë thelbësore për disiplinën tonë dhe diçka për të cilën do të flasim gjerësisht në kapitullin e parë. Por më shumë se çdo gjë dialogun tonë e ushqente përvoja e mësimdhënies. ', 5.30, '2024-05-30T16:24:00.024Z', 'Paper', 43, 36);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123595, '299.jpg', 'Kuvendimi I Zogjve ', '2024-05-30T16:24:00.024Z', 401, 'Një nga kryeveprat botërore të letërsisë, i ilustruar në 600 faqet e tij, shpalos vargjet e poetit të madh mistik, Attar, përcjellur me ilustrime autentike të krijuara enkas për botimin e parë në shqip, nëpër 7 luginat e rrugëtimit të zogjve drejt Pafundësisë ',16.00, '2024-05-30T16:24:00.024Z', 'Paper', 36, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123476, '163.jpg', 'Enciklopedia Ime E Pare Si ', '2024-05-30T16:24:00.024Z', 102, 'Merr përgjigje për të gjitha pyetjet që ke mbi: trupin e njeriut, sistemin diellor, teknologjinë, kafshët, shkencën dhe natyrën. ', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 21, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123423, '115.jpg', 'Anatomia E Nje Krize Financiare ', '2024-05-30T16:24:00.024Z', 401, 'Cili është fajtori? Përse është pothuajse e pamundur të parashikohet një krizë financiare? Janë të paaftë ekonomistët, financierët apo politikanët? Është faji i kapitalizmit liberal dhe popujve derregulluese? Çfarë interesash e lobesh fshihen mbrapa krizave financiare? A ka mundur shkenca ekonomike të ndërtojë një teori të qartë dhe të strukturuar që shpegon krizat financiare, shkaqet, përgjegjësitë,efektet dinamikat e trajektoret e tyre, politikatmë efiçente për përballimin e tyre, rolin e tregut, shtetit dhe institucioneve të ndryshme në raport me krizat? Përgjigja është e pa qartë dhe mjaft e muancuar: Po dhe JO! ', 13.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123341, '17.jpg', 'Mendime Të Pakrehura', '2024-05-30T16:24:00.024Z', 113, ' Kam parë një ëndërr të tmerrshme. Një rritje e tepruar e burokracisë në shtet , në të cilin kohë më parë me sukses ka përfunduar lufta kundër analfabetizmit.', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 39, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123536, '235.jpg', 'Historia E Austrise ', '2024-05-30T16:24:00.024Z', 401, 'Kjo histori e Austrisë shtrihet në harkun kohor që zë fill me periudhën romake, vijon me krijimin e vend-banimeve në Mesjetën e hershme, format e reja të organizimit si krahinë kufitare (markë) kundër avarëve e hungarezëve dhe, përmes Dukatës Babenberge dhe “Shtetit të Alpeve” të Habsburgëve, i cili që nga shekulli i 16 u rrit duke u bërë një fuqi europiane, arrin te Perandoria e Austrisë, Monarkia e dyfishtë Austro-Hungareze dhe së fundi te Republika e vogël e shekullit të 20. ', 15.00 , '2024-05-30T16:24:00.024Z', 'Paper', 66, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123537, '236.jpg', 'Levizja E Lirise ', '2024-05-30T16:24:00.024Z', 4.00, ' Ky libër i Belës, me titull “Lëvizja e lirisë” dhe nëntitull “Lëvizja Studentore e vitit 1997 nën vëzhgimin e mediave”, ka pesë kapituj, në të cilët autori ka ndjekur, hap pas hapi, idenë e realizimit të protestës së organizuar nga Unioni i Pavarur i Studentëve të Universitetit të Prishtinës në vitin 1997, pastaj raportimet e mediave vendore dhe ndërkombëtare për jehonën e asaj ngjarjeje, por edhe të disa të tjerave që ndodhën pas asaj proteste në Prishtinë. ', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 12, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123589, '293.jpg', 'Fjalor I Muzikes Klasike Dhe Popullore ', '2024-05-30T16:24:00.024Z', 287, 'Përfshin 3000 zëra dhe 2 mijë vjet muzikë të shkruar në Europë dhe Shqipëri. Fjalori i parë terminologjik i muzikës klasike dhe popullore" mban firmën e Ilir Polenës dhe Vaso Toles. Në këtë botim janë të përfshirë rreth 3000 fjalë. Tole thotë se puna për këtë fjalor është nisur nga ky dorëshkrim i studiuesit të njohur Ilir Polena që 20 vite më parë dhe botimin e cilëson si amanet të përmbushur, pasi ai është ndarë nga jeta një vit më parë. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 44, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123344, '20.jpg', 'Nje Det Pa Dallge S Eshte Det', '2024-05-30T16:24:00.024Z', 61, '  Një det pa dallgë s’është det është një libër me Aforizma e sentenca nga autori Skënder Temali.', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 41, 16);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123506, '201.jpg', 'Republika E Platonit ', '2024-05-30T16:24:00.024Z', 522, 'Sipas modelit të Republikës, por duke e rimarrë e rilexuar në mënyrë eklektike tekstin e filozofit grek të lashtësisë, duke e furnizuar bisedën me referenca kulturore të 25 shekujve të fundit të qytetërimit perëndimor, Badiou përdor dialogun sokratik si formë për te iu qasur edhe një herë temave themelore të filozofisë: drejtësia, politika, e vërteta, në një përpjekje të re për të zbuluar domethënien e tyre sot ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 42, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123545, '246.jpg', 'David Koperfildi Vol 2 ', '2024-05-30T16:24:00.024Z', 380, ' ibri, ”David Copperfield”, është romani i tetë nga Charles Dickens, botuar fillimisht si një roman në vitin 1850. Ashtu si shumica e veprave të tij, kjo vepër fillimisht u shfaq në formë serish një vit para botimit. Shumë elemente brenda romanit ngjasojnë me ngjarje nga jeta e vetë Dickensit dhe kjo është ndoshta vepra më autobiografike e tij. Në roman trajtohet jeta e David Copperfield-it që nga fëmijëria, tek mosha e rritur. Ky libër është vëllimi i dytë..', 9.40, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123546, '248.jpg', 'Karriera E Rugoneve ', '2024-05-30T16:24:00.024Z', 341, ' Mbi librin Romani "Karriera e Rugonëve", që siç thotë vetë autori, shkrimtari i shquar francez E. Zola, "duhet të quhet me titullin shkencor: Origjina", është romani i parë i ciklit të Rugon Makarëve ku autori paraqet jetën dhe zhvillimin e një familjeje nën Perandorinë II. Prandaj, ai e shtrin veprën e tij në kohë e hapësirë, i jep asaj sfondin historiko politik, mban në të ritmin e kohës, përdor ngjyrat lokale dhe paraqet tërë atë vorbull idesh që vunë në lëvizje atë epokë. Në planin e përgjithshëm të Rugon Makarëve analizohet lindja, zhvillimi dhe rënia e regjimit të Napoleonit III.', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 48, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355456, '352.jpg', 'Po Sikur ', '2024-05-30T16:24:00.024Z', 289, ' Ky libër përmbledh përgjigjet më të famshme nga faqja “Po sikur?” e xkcd-së. Shumë prej pyetjeve (51 përqind) janë të reja dhe u është dhënë përgjigje për herë të parë këtu. “Po sikur?” është një gosti informative për fansat e xkcd-së dhe për cilindo që pëlqen të meditojë pyetje hipotetike. ', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 21, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355430, '360.jpg', 'Si Ndryshojne Shoqerite ', '2024-05-30T16:24:00.024Z', 274, '  Si kanë ndryshuar shoqëritë gjatë 5000 viteve të shkuara? Ky tekst i përbledhur i makro-sociologjisë, i shkruar nga Daniel Chirot, profesor i studimeve ndërkombëtare dhe i sociologjisë në Universitetin e Uashingtonit, në Siatëll, i çon studentët në një udhëtim të gjatë për te iu përgjigjur kësaj pyetjeje. Ky libër, i vetmi tekst i përmbledhur i makro-sociologjisë në dispozicion të studentëve të universitetit, tregon sesi kanë ndryshuar shoqëritë gjatë pesë mijë viteve të shkuara', 13.95, '2024-05-30T16:24:00.024Z', 'Paper', 36, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355531, '361.jpg', 'Qyteti Antik ', '2024-05-30T16:24:00.024Z', 488, ' Zbulimet e fundit për origjinën e përbashkët indoeuropiane i japin mundësi Fustel de Coulanges të kapërcejë hendekun kronologjik, për të trajtuar bashkërisht Greqinë dhe Romën dhe për të shtruar çështjen e qytet-shtetit antik. Por ajo çka ngre ai në këtë vepër, nuk është aq një histori e re e Antikitetit, sesa historia e një besimi dhe mënyra se si ky i dha formë një shoqërie.', 17.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123399, '77.jpg', 'Shpirt I Eger ', '2024-05-30T16:24:00.024Z', 287, 'Në moshën 22-vjeçare, Cheryl Strayed mendoi se kishte humbur gjithçka. Pas humbjes së nënës, secili në familje mori rrugën e tij dhe shumë shpejt mori fund edhe martesa e saj. Katër vjet më vonë, duke menduar se nuk kishte më asgjë për të humbur, ajo mori vendimin më të rëndësishëm të jetës. Pa pasur asnjë lloj përvoje dhe as stërvitjen e duhur, e udhëhequr vetëm nga vullneti i hekurt, ajo përshkoi më shumë se një mijë e pesëqind kilometra të Shtegut të Kreshtës së Paqësorit nga shkretëtira e Mohaves, nëpër Kaliforni, Oregon dhe Uashington, e vetme. Një histori e treguar me shumë stil, ngrohtësi dhe humor. "Shpirt i Egër" rrëfen tmerret dhe kënaqësitë e një gruaje të re, e cila ndërmerr një rrugëtim i cili e rraskapiti, e forcoi dhe në fund, e shëroi! Komente mbi librin: “Një libër i mrekullueshëm, i cili nuk është vetëm argëtues, por të bën të ndihesh shumë mirë pasi e ke përfunduar”. ', 13.00, '2024-05-30T16:24:00.024Z', 'Paper', 52, 41);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355527, '333.jpg', 'Mbreteresha E Festes Se Madhe ', '2024-05-30T16:24:00.024Z', 388, 'Mbreteresha E Festes Se Madhe nje liber romance i jashtzaonshem... ', 8.80, '2024-05-30T16:24:00.024Z', 'Paper', 48, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355628, '334.jpg', 'Kalifja ', '2024-05-30T16:24:00.024Z', 272, ' Një vajzë e thjeshtë, por shumë e ëmbël, Kalifja, bëhet e dashura e të fuqishmit të qytetit, industrialistit më të madh, Mastro don Gesualdo.Ajo është portreti i paharrueshëm i një gruaje të lirë, të guximshme, instiktive, rebele, e paaftë për kompromise, zemërgjerë, pra, në fund të fundit, në mënyrën e saj të pafajshme.Një dashnore pa servilizëm, në pastërtinë dhe dashurinë e të cilës industrialisti do të rigjejë një dëshirë të re për jetën dhe vetë lirinë.', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 31, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355329, '335.jpg', ' Serenata', '2024-05-30T16:24:00.024Z', 472, ' Fundi i viteve 30... Maksimilian Vagner, një gjerman me gjak të pastër arian dhe pedagog në universitet, bie në dashuri me vajzën e bukur hebreje të quajtur Nadia. Pas martesës, për të fshehur identitetin hebre të Nadias, ajo mori emrin Deborah... ', 12.95, '2024-05-30T16:24:00.024Z', 'Paper', 42, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123583, '286.jpg', 'Zoteria I Jetimeve ', '2024-05-30T16:24:00.024Z', 546, ' Pak Jun Do është bir i një nëne të zhdukur - një këgëtareje të rrëmbyer dhe të dërguar në Penian, për të joshur të fuqishmit e kryeqytetit - dhe i një babai të rreptë, drejtor i një jetimoreje. Në moshë të rritur, shquhet për besnikërinë dhe guximin, aq sa e bindi shtetin te i japë mundësinë të ngjitë me shpejtësi shkallët e karrierës. Kështu i hynë kësisoj një rruge pa kthim, përmes kthinave të fshehta të diktaturës më misterioze të planetit. ', 10.70, '2024-05-30T16:24:00.024Z', 'Paper', 14, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123584, '287.jpg', 'Misteri I Trenit Blu ', '2024-05-30T16:24:00.024Z', 298, ' Një tren shumë i bukur përshkon hekurudhën që lidh Londrën gri me plazhet e ngrohta të rivierës franceze; është Treni Blu, treni i multimiliarderëve, në të cilin nuk mungojnë skandalet dhe pasuria, por edhe ku krimi mund të nxjerrë kokën pas çdo dere. Pikërisht në njërin prej vagonëve kryhet një vrasje djallëzore teksa agresori përpiqet, me sukses, të grabitë një varëse të çmuar prej rubini. Ruth Keteringu, bija e miliarderit Van Aldin dhe gruaja e një lordi anglez, mbytet në mënyrë brutale teksa udhëtonte me tren. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 66, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123372, '49.jpg', 'Berati Histori Arkitekture', '2024-05-30T16:24:00.024Z', 288, 'Historia e Beratit dhe arkitekturës të një prej vendeve më të bukura të Shqiperisë. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 44, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123528, '223.jpg', 'Kritika ', '2024-05-30T16:24:00.024Z', 213, ' Tryeza e lëndës: E po ku jemi, Mendimet paradoksale të Rexhep Qosjes, Viti letrar 1973, Flet pak pse di shumë, Traumat e poetit. ', 5.90, '2024-05-30T16:24:00.024Z', 'Paper', 32, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123373, '50.jpg', 'Si Ta Kuptosh Arkitekturen', '2024-05-30T16:24:00.024Z', 288, ' Keni menduar ndonjëherë për shtëpinë tuaj, zyrën, shkollën, kinemanë, gjellëtoren, dyqanet, rrugët dhe sheshet ku shkoni shpesh? I keni parë ndonjëherë hapësirat brenda të cilave jetoni? Keni reflektuar mbi vlerën e veçantë të arkitekturës, krahasuar me atë të arteve të tjera figurative? Çfarë ndryshimi ka mes banesës suaj dhe një tempulli apo një harku triumfi? Po mënyra se si e gjykojmë një monument të Bramantes ose të Borrominit, a bazohet në kritere të ndryshme nga ato mbi të cilat mbështetet vlerësimi i një vepre të Terragnit, le Corbusier-së ose e Wrightit? A është arkitektura një art “abstrakt” apo ka përmbajtje të qartë? Si ta kuptosh arkitekturën u përgjigjet këtyre pyetjeve; ka për qëllim të zbulojë sekretin, thelbin hapësinor të arkitekturës, në mënyrë që edhe ju të dini t’i shikoni mjediset ku shpenzoni një pjesë të madhe të ekzistencës suaj.', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 5);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123526, '221.jpg', 'Vitet E Fshehura ', '2024-05-30T16:24:00.024Z', 266, 'Poezia e Rexhep Hotit krijohet me vargun e vecantë që bartë në vete botën e mendimit poetic, me emocione që shëtisin lirshëm nëpër epoka, stinë e hapësira tej mitologjike, duke i përthyer meditimet dhe përsiatjet e heroit lirik deri në pafundësinë e universit për t’ia sjell botës së brendshme të përjetimit pasurinë e artit me nxitje, çaste e ngjyrime origjinale. Filozofia estetike e krijimit të tij është metafora e nënshtresuar në përmasa të frikshme të së bukurës. Poezia e Rexhep Hotit e ka dhuntinë për ta ndarë me lexuesin përjetimin e mesazhit artistik. Ajo rrëmben në udhëtimin e saj pa e kuptuar se je bërë pjesë e aventurave të vargut, të shkronjave, të fjalëve të saj, çfarëdo qoftë stina apo hapësira ku ajo të hedhë. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 63, 15);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1735552, '309.jpg', 'Grabitja E Evropes ', '2024-05-30T16:24:00.024Z', 97, 'Poezi nga Ivan Xheparoski. ', 4.95, '2024-05-30T16:24:00.024Z', 'Paper', 58, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123544, '243.jpg', 'Komploti Kunder Lirise ', '2024-05-30T16:24:00.024Z', 650, ' Shqipëria nga diktatura në demokracinë bolshevike si dhe nga diktatura e proletariatit pa proletarë, në kapitalizmin borgjez pa borgjezi. Konflikti mes demokracisë dhe lirisë. Pushteti i drejtësisë pa drejtësi. Korrupsioni dhe krimi i pandëshkuar: piramidat financiare, grushtet e shtetit deri te tragjedia e Gërdecit dhe masakra e 21 janarit. ', 14.95, '2024-05-30T16:24:00.024Z', 'Paper', 3, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123411, '90.jpg', 'Momentet Vendimtare ', '2024-05-30T16:24:00.024Z', 506, 'Libri që shpresoj të pasqyrojë një tablo të tetë viteve te njëpasnjëshme të presidencës. Besoj se është e pamundur të arrihet në përfundime të prera rreth presidencës sime – qoftë edhe presidencës së mëparshme – për disa dekada. Me kalimin e kohës pasionet fashiten, rezultatet qartësohen dhe për pasojë, studiuesit e kanë më të lehtë të krahasojnë qasje të ndryshme.  ', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 53, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123432, '125.jpg', 'Hyrje Ne Ekonomi ', '2024-05-30T16:24:00.024Z', 401, 'PJESA E PARË:MIKROEKONOMI KREU I: Një Vështrim i Përgjithshëm mbi Shkencën Ekonomike KREU II: Kërkesa, Oferta, Ekuilibri i tregut KREU III:Elasticiteti i Kërkesës dhe i Ofertës KREU IV:Sjellja konsumatore KREU V: Firmat KREU VI:teoria e Prodhimit dhe Produktit Marxhinal KREU VI:Kostoja KREU VII:Përcaktimi i Çmimeve në Konkurencë të Plotë KREU IX:Monopoli KREU X: Forma të Tjera të Konkurencës së Plotë KREU XI:Shpërndarja e të Ardhurave KREU XII:Sektori Publik PJESA E DYTË:MAKROEKONOMI KREU XII: Hyrje në makroekonomi KREU XIV: Ekuilibri Makroekonomik KREU XV:Konsumi dhe INVESTIMET KREU XVI:Shpenzimet dhe të Ardhurat KREU XVII: Ciklet e Biznesit dhe Rritja Ekonomike KREU XVIII: Inflacioni KREU XIX:Papunësia KREU XX:Raporti Inflacion -Papunësi KREU XXI: Paraja dhe Sistemi Bankar KREU XXI: Banka Qendrore dhe Politika Monetare KREU XXIII:Politika Fiskale KREU XXIV:Marrëdhëniet Ekonomike Ndërkombëtare ', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 7, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1235534, '311.jpg', 'Libri I Psikologjise ', '2024-05-30T16:24:00.024Z', 352, 'A jemi vërtet ndryshe nga të tjerët apo u përshtatemi atyre? Pse kujtojmë dhe pse harrojmë? Si mund ta matim inteligjencën? Këto pyetje e të tjera syresh janë thelbi i punës së disa prej mendimtarëve dhe eksperimentuesve më të mëdhenj në botë në këtë fushë magjepsëse. Libri i Psikologjisë është plot me shpjegime që depërtojnë në thelbin e kuptimeve të ndërlikuara, i pajisur me diagrame që zbërthejnë teori të koklavitura, me citime të paharrueshme dhe ilustrime të goditura, të cilat luajnë me perceptimet dhe besimet tona. ', 24.95, '2024-05-30T16:24:00.024Z', 'Paper', 62, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1235545, '312.jpg', 'Terapia E Mevlana Xheladin Rumiut ', '2024-05-30T16:24:00.024Z', 401, 'Mevlana do të jetë ai i cili do të na tregojë rrugën nga epoka e dijes në epokën e urtësisë. Ai na prek butonat e shifrave të strukturës sonë shpirtërore dhe e fut në lëvizje ndjesinë e cila ekziston te ne. -Prof. Dr. Nevzat Tarhan Njerëzimi po rizbulon Mevlanën. Mësimet e tij janë tepër universale për të mbetur të mbërthyera në kohën që jetoi ai, sepse të gjithë kemi shumë për të mësuar prej tij. Duke parë nga këtu, prof. dr. Nevzat Tarhan shpjegon se si urtësia e Mesnevi, e cila i tejkaloi shekujt mund të jetë shëruese për shpirtin. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123565, '266.jpg', 'Mbi Poezine Naive Dhe Sentimentale ', '2024-05-30T16:24:00.024Z', 401, 'Mbi Poezine Naive Dhe Sentimentale eshte nje liber qe tregon kritike te thelle baze mbi to... ', 6.80, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123461, '140.jpg', 'Libri Im I Eksperimenteve ', '2024-05-30T16:24:00.024Z', 130, ' 101 eksperimentet shkencore të këtij libri, që mbështeten në tema të tilla, si: ajri dhe gazi, magnetët, ngjyrat, shqisat, elektriciteti e të tjera, do t’jua rrëfejnë ligjet e shkencës në praktikë, që ju t’i zbatoni me duart tuaja. Për ta bërë shkencën argëtuese, nuk ka mënyrë më të mirë sesa t’i realizoni këto eksperimente të thjeshta në kushtet e shtëpisë, me mjetet që keni përqark. Ky koleksion i pasur eksperimentesh do t’i argëtojë pa fund kureshtarët, duke u treguar kështu mjaft gjëra për shkencën dhe ligjet e natyrës, në mënyrën më të thjeshtë dhe më argëtuese. E kush nuk do të donte të shndërrohej në një Ajnshtajn të vogël, të mësonte të krijonte një ylber, një vullkan nënujor apo të ndërtonte një busull? Çdo eksperiment në libër shpjegohet thjesht e qartë, si edhe shoqërohet me foto të hollësishme, që do t’jua bëjnë punën shumë të lehtë. Zbulojeni këtë botë të mahnitshme!', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 28, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123443, '104.jpg', ' E Drejta Biznesore', '2024-05-30T16:24:00.024Z', 332, ' Liber Universitar', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 60, 35);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123447, '108.jpg', ' Politika Financiare E Ndermarrjes', '2024-05-30T16:24:00.024Z', 202, 'Politika financiare e ndërmarrjes paraqet një kuadër të analizës teorike të nëvojshme për të interpretuar problemet e financës në brendësi të ndërmarrjes dhe faktorët që përcaktojnë zgjedhjet e politikave financiare, duke u ndalur në rastin e ndërmarrjes agroindustriale. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 31, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123414, '93.jpg', 'Zonjat E Para ', '2024-05-30T16:24:00.024Z', 324, 'Një shikim i imtësishëm në jetën e zonjave të para të Amerikës moderne, që nga Xheki Kenedi, Nensi Regani e deri te Mishel Obama.Detyra e zonjës së parë të Amerikës nuk është shumë e vlerësuar, megjithatë prej tyre kërkohet kaq shumë: ato duhet të jenë udhëheqëse frymëzuese; duhet të planifikojnë më së miri çdo lëvizje apo aktivitet; duhet të jenë gjithaq politikane të mira sa bashkëshortët e tyre, që kanë në dorë timonin e gjithë botës; duhet të jenë bashkëshorte dhe nëna që i kryejnë këto dy detyra nën qindra sy vëzhgues dhe kritikë; si edhe drejtuese të afta të rezidencës së Shtëpisë së Bardhë.Ashtu si në librin e saj të parë, “Rezidenca - brenda botës private të Shtëpisë së Bardhë”, edhe këtë herë, autorja Kate Andersen Brower sjell për lexuesit në mbarë botën detaje të brendshme, të marra nga stafi i ngushtë presidencial, por edhe nga vetë zonjat e para të Amerikës. ', 13.00, '2024-05-30T16:24:00.024Z', 'Paper', 52, 19);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123392, '69.jpg', 'Shqipëria Në Art ', '2024-05-30T16:24:00.024Z', 341, ' Shqipëria në art, paraqitet si një enciklopedi e kujtesës figurative për historinë, kulturën dhe trashëgiminë kombëtare. Përmes statujave, mozaikëve, afreskeve, pikturave, gravurave, litografive, grafikave, akuareleve, të krijuara nga kohët më të hershme deri në ditët tona, njihemi me aspekte nga më të ndryshmet të jetës në trojet e banuara prej shqiptarëve. ', 49.40, '2024-05-30T16:24:00.024Z', 'Paper', 3, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123327, '256.jpg', 'Endërr', '2024-05-30T16:24:00.024Z', 136, ' Një eksplorim surreal i përmasave intime të martesës. Kurioziteti i sinqertë i Fridolinit për seksualitetin e bashkëshortes nuk i kundërvihet dot xhelozisë dhe narcizizmit të tij të lënduar. Schnitzler – i pyet veten sesi dy njerëz të zgjuar, tërheqës dhe të ndjeshëm mund të ndajnë një shtrat, një fëmijë dhe një jetë për vite me radhë, kur dëshirat e zjarrta erotike, të drejtuara gjetkë, janë të pashmangshme.Duket se përgjigja qëndron te gënjeshtra, në një balancë sekretesh midis dy të huajsh. Vullneti i tyre për të hetuar fantazitë e kaluara dhe të tashme të njëri – tjetrit e bën martesën e tyre të pazakontë. Nëse ky origjinalitet e afron apo jo shkatërrimin e çiftit, kjo mbetet për tu zbuluar.Novela "Ëndërr" ka frymëzuar regjisorin e njohur Stenley Kubrick për realizimin e "Eyes wide shut" me aktorët Nicole Kidman dhe Tom Cruise ', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 7, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123328, '2.jpg', '999 Mendime Te Njerezve Te Shquar', '2024-05-30T16:24:00.024Z', 341, ' Mendimet nga njerëzit e shquar që kanë rëndësi të madhe në ndryshimii e të menduarit si qenie njerëzore ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 31, 5);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123345, '22.jpg', 'Triumfi I Talentit', '2024-05-30T16:24:00.024Z', 92, 'TRIUMFI I TALENTIT “ është një libër me tregime dhe skica satirike. Skicat e shkurtra te Karaxhiales përbëjnë një komedi njerëzore por e realizuar me të tjera mjete. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 42, 36);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355676, '346.jpg', 'Teoria E Lekundjeve ', '2024-05-30T16:24:00.024Z', 236, 'Ky tekst ka për qëllim të njohë përveç tjerash , edhe rrethin e gjerë të lexuesve , që kanë kryer shkollimin e lartë , sidomos ata të profilit inxhinierik me materialin teorik bazë , që nuk përfshihet në programin e fakulteteve përkatëse. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355377, '347.jpg', 'Bazat E Programimit Kompjuterik ', '2024-05-30T16:24:00.024Z',224, 'jë udhëzues unik, i rrallë, i pari në shqip, për të apasionuarit pas programimit kompjuterik, si dhe për të gjithë ata që duan të kuptojnë se si funksionojnë kompjuterat. Programi kompjuterik është tërësia e udhëzimeve që zbaton kompjuteri për të kryer një detyrë. “Të kodosh” ose “të programosh”, do të thotë të shkruash hap pas hapi udhëzime, të cilat i tregojnë kompjuterit se çfarë duhet të bëjë. ', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 28, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123451, '113.jpg', 'Politika Financiare E Ndermarrjes ', '2024-05-30T16:24:00.024Z', 401, 'Politika financiare e ndërmarrjes paraqet një kuadër të analizës teorike të nëvojshme për të interpretuar problemet e financës në brendësi të ndërmarrjes dhe faktorët që përcaktojnë zgjedhjet e politikave financiare, duke u ndalur në rastin e ndërmarrjes agroindustriale. ', 7.20, '2024-05-30T16:24:00.024Z', 'Paper', 31, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123408, '87.jpg', ' E Verteta Ime', '2024-05-30T16:24:00.024Z', 401, '"Për herë të parë, Hillari Klinton rrëfen përjetimet e saj gjatë një prej zgjedhjeve më kontroverse dhe të paparashikueshme në histori. Tanimë, e lirë nga çdo trysni, ajo flet për një garë presidenciale të mbushur me zemërim, seksizëm, ulje-ngritje të pazakonta dhe një kundërshtar, i cili shkeli të gjitha rregullat e garës.Në këtë libër, ajo tregon se ç’do të thotë të garosh kundër Donald Trampit, cilat ishin gabimet e saj, si e përballoi ajo atë humbje shkatërruese dhe si gjeti fuqi të mblidhte veten e të shihte përpara për të ardhmen; ç’sfida duhet të kalojë një grua për t’u shfaqur e fortë në sy të publikut të gjerë, kritikat për zërin, moshën dhe pamjen e saj, por, mbi të gjitha, për standardet e dyfishta me të cilat përballet një grua në politikë.Zgjedhjet e vitit 2016 në Amerikë u shënjuan nga një sulm i paprecedent në demokracinë e vendit, nga një kundërshtar i huaj. ', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 53, 58);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123409, '74.png', 'Guximi Per Te Shpresuar ', '2024-05-30T16:24:00.024Z', 427, 'Biografi dhe kujtime. Refleksione për rikthimin e ëndërrës amerikane. ', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 5, 26);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123491, '198.jpg', 'Muri ', '2024-05-30T16:24:00.024Z', 373, 'Muri është botuar në FraNë Dublin, më 1710 botohej për herë të parë“Traktati i parimeve të njohjes njerëzore”. Është fjala për pjesën e parë të një vepre më të gjërë që nuk u botua kurrë në tërësinë e saj. Sa qe gjallë Berkeley ky traktat u ribotua vetëm një herë, me disa ndryshime, më 1734, ndërkohë që “Eseja për një teori të re të shikimit” pati katër ribotime (1709, 1710, 1732, 1732) dhe tri herë u botuan “Dialogët ndërmjet Hylasit e Filonit” (1713, 1725, 1734). Pas vdekjes së Berkeley-t dhe para botimeve kritike të Fraser-it, të Luçe e Jessop-it, teksti i Parimeve u dha shkas dy botimeve të veçanta, njëri më 1776, ku teksti shoqërohej me shënimet dhe përgënjeshtrimet e një pasuesi të Locke-ut, tjetri, një shekull më vonë, më 1878, u paraqit nga një ithtar I imaterializmit. Kjo ishte si të thuash jehona e debatit të hapur nga Berkeley. Në të vërtetë, për shekullin e tĳ dhe në shumë fusha të dĳes, ai ka qënë një autor i rëndësishëm.ncë, në vitin 1939, një vit pas Neverisë. Konsiderohet si vepra letrare më e rëndësishme dhe më përfaqësuese e intelektualit të madh francez. Motiv i përbashkët i rrëfimeve të përmbledhura në këtë vëllim është antiteza midis guximit dhe frikës: një prirje e ndryshme, përballë jetës së personazheve të ndryshme, që një monolog i brendshëm plot tension zbulon në një moment të errët të fatit të tyre. Muri, përpara të cilit të dënuarit do të gjejnë vdekjen, faqet e murit të dhomave, që mbyllin mistere tragjike seksuale dhe kriminale, torturat dhe hipokrizitë sociale, që helmojnë një ndërgjegje që sapo ka lindur dhe e përgatisin për një fat fajtor, janë aspektet përbërëse të këtij realiteti të pabesueshëm. Muri, Dhoma, Herostrati, Intimitet, Fëmijëria e një padroni janë pesë rrëfime, që nxjerrin lakuriq guximin dhe frikën përballë jetës. Vdekje, marrëzi, dobësi, zvetënim dhe gënjeshtra: rreth këtyre temave lidhet ekzistenca e protagonistëve të librit. ', 7.60, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123492, '183.jpg', 'Traktat Mbi Parimet E Njohjes Njerezore ', '2024-05-30T16:24:00.024Z', 283, ' Në Dublin, më 1710 botohej për herë të parë“Traktati i parimeve të njohjes njerëzore”. Është fjala për pjesën e parë të një vepre më të gjërë që nuk u botua kurrë në tërësinë e saj. Sa qe gjallë Berkeley ky traktat u ribotua vetëm një herë, me disa ndryshime, më 1734, ndërkohë që “Eseja për një teori të re të shikimit” pati katër ribotime (1709, 1710, 1732, 1732) dhe tri herë u botuan “Dialogët ndërmjet Hylasit e Filonit” (1713, 1725, 1734). Pas vdekjes së Berkeley-t dhe para botimeve kritike të Fraser-it, të Luçe e Jessop-it, teksti i Parimeve u dha shkas dy botimeve të veçanta, njëri më 1776, ku teksti shoqërohej me shënimet dhe përgënjeshtrimet e një pasuesi të Locke-ut, tjetri, një shekull më vonë, më 1878, u paraqit nga një ithtar I imaterializmit. Kjo ishte si të thuash jehona e debatit të hapur nga Berkeley. Në të vërtetë, për shekullin e tĳ dhe në shumë fusha të dĳ es, ai ka qënë një autor i rëndësishëm.', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123396, '73.jpg', 'Opinion ', '2024-05-30T16:24:00.024Z', 309, 'Një libër me përmbledhje intervistash të emisionit OpinionMe:- Ismail Kadare- Mbretëresha Geraldinë- Ramiz Alia- Sali Berisha- Fatos Nano- Edi Rama- Jusuf Vrioni- Alfred Moisiu- Atë Zef Pllumi- Abaz Ermenji- Dritëro Agolli- Liri Belishova- Fadil Hoxha- Hashim Thaçi- Ilir Meta- Leka Zogu- Rexhep Qosja- Azem Hajdari- Sabri Godo- Hana Këlcyra- Pjetër Arbnori- Kristo Frashëri. ', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123452, '142.jpg', 'Oqeanologjia ', '2024-05-30T16:24:00.024Z', 102, ' Rrëfimi i një aventure mbi oqean dhe nën të. “Oqeanologjia” është historia e vërtetë e udhëtimit të Nautilusit. Libri ka formën e shënimeve gjatë një udhëtimi eksplorimi, në krah të kapiten Nemos, duke parashtruar se, në të vërtetë, kjo ka qenë baza faktike mbi të cilën është mbështetur Zhyl Verni për të shkruar librin e tij “Njëzet mijë lega nën det”. Libri është plot e përplot me fakte të mahnitshme, me krijesa dhe zbulime, me një figurë trepërmasore në kopertinë dhe me ilustrime fantastike. Nëpërmjet tij do të eksploroni oqeanet e botës, nga akulli i Arktikut e deri në ujërat e thella të Paqësorit. Në bordin e Nautilusit do të përballeni me krijesa të llahtarshme të thellësive, shumica mitike dhe madje do të udhëtoni deri në qytetin legjendar të Atlantidës. Ky libër do t’ju udhëheqë në një udhëtim mahnitës dhe, njëkohësisht, do t’ju tregojë shumë për oqeanet.', 25.50, '2024-05-30T16:24:00.024Z', 'Paper', 62, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123493, '184.jpg', '50 Ide Filozofike ', '2024-05-30T16:24:00.024Z', 281, 'Filozofia shihet si një prototip i disiplinave akademike, me praktikuesit e saj, të mbyllur në mënyrë të vendosur në kullat e tyre të fildishta, e veçuar nga problemet e jetës reale. Karikatura qëndron në shumë mënyra larg së vërtetës. Çështjet e filozofisë pa asnjë dallim mund të jenë të thella dhe shpesh herë të vështira, por gjithashtu ato janë edhe të rëndësishme. Shkenca, për shembull, ka potencialin për të mbushur dyqanin e lodrave me lloj - lloj lodrash të mrekullueshme, por fatkeqësisht ajo nuk na ka dhënë dhe nuk mund të japë librin e udhëzimeve. Për të vendosur se çfarë duhet të bëjmë dhe jo se çfarë mund të bëjmë duhet te i kthehemi filozofisë. Nganjëherë filozofët pushtohen nga kënaqësia e lehtë e të dëgjuarit të mendimeve të tyre teksa kryqëzohen (dhe në fakt, diçka e tillë e bën interesant të dëgjuarit), por më shpesh ata sjellin qartësi dhe kuptueshmëri për çështje që të gjithë neve duhet të na interesojnë. Ky libër synon të mbërthejë dhe të eksplorojë pikërisht këto çështje. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123521, '216.jpg', ' Ibrahim Rugova Bibliografi Letrare 1961 2015', '2024-05-30T16:24:00.024Z', 352, '“Libri përfshin veprimtarinë e tij dhe shkrimet për të që nga fillimet (1961) e deri në ditët e sotme (2015). E quajtëm bibliografi letrare sepse këtu shënohet vetëm një pjësë e veprimtarisë së tij, ajo letrare, me shpresë se edhe materiali i grumbulluar për Rugovën udhëheqës e politikan do të sistemohet e të botohet në një vëllim të veçantë” ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 62, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123494, '185.jpg', ' Nje Pervijim I Filozofise', '2024-05-30T16:24:00.024Z', 383, ' Në këtë vepër, Russell trajton çështje themelore të filozofisë, si natyra e dijes, marrëdhënia midis perceptimit dhe realitetit, ekzistenca e materies dhe problemet e njohjes. Ai shqyrton edhe konceptet e skepticizmit dhe përshkruan metoda për të dalluar dijen e sigurt nga besimet e pabazuara. ', 11.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123495, '186.jpg', 'Pertej Se Mires Dhe Se Keqes ', '2024-05-30T16:24:00.024Z', 232, '"Krijesat njerëzore, të trishtuara thellë, tradhëtojnë vetveten kur janë të lumtura. Ato kanë një mënyrë të veçantë për të kapur lumturinë: sikur duan ta shtypin dhe ta mbysin nga xhelozia, ah, e dinë shumë mirë se ajo do te u ike. Si vepra e dytë monumentale e Niçes, pas "Kështu foli Zarathustra", ky libër mund të shihet edhe i përshtatur me vetë nëntitullin e tij: prelud i një filozofie të së ardhmes. Kjo pasi autori shpreh, me anë të po asaj gjuhe të zgjedhur e plot metafora të Zarathustrës, të buruara nga zemra e një dashurie vetmitare për njeriun dhe të ardhmen e tij koncepte dhe opinione të ndryshme për historinë natyrale dhe morale, për paragjykimet e filozofëve, për shpirtin e lirë dhe qënien fetare, për popujt dhe shtetet, e së fundi, edhe për të virtytshmit dhe aristokratët. ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123397, '75.jpg', 'Lufta E Kosoves Dhe Hashim Thaci ', '2024-05-30T16:24:00.024Z', 288, 'Libri me autorë Blendi Fevziu dhe Baton Haxhiu, është një lloj “dosje e lavdisë” së Thaçit në luftën e Kosovës, kundër një “dosje akuzash” me të cilat presidenti përballet tashmë në hagë, në kuadrin e Gjykatës Speciale ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123367, '45.jpg', 'Arkitekture Nje Veshtrim Historik', '2024-05-30T16:24:00.024Z', 246, ' "Ky libër flet për arkitekturën; për shqetёësimet, synimet dhe arritjet e njerëzve qё u morën me të dhe se si u prit puna e tyre. Kjo bëhet nëpërmjet historisë. Ai është një guidë leximi për arkitekturën e djeshme, me shikimin e kthyer kah e nesërmja." ', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 24, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123453, '132.jpg', 'Udhetim Ne Pikturat Shqiptare ', '2024-05-30T16:24:00.024Z', 80, ' Shkrimtari Luan Rama, që është edhe personazhi i gjyshit në këtë libër, e shoqëron mbesën e tij, Lolën, por edhe të gjithë lexuesit e vegjël në atelietë e piktorëve, si dhe në galeritë dhe muzetë e artistëve më të njohur shqiptarë në kohë. Ky udhëtim fillon me tablotë e realizuara në shekujt XVI-XVIII, nga mjeshtri i madh Onufri, nga pasuesi i tij i denjë, Konstandin Shpataraku; vazhdon më pas me tablotë e shekullit XX të piktorëve, si Spiro Xega, autori i tablosë së njohur “Skënderbeu”, piktori dhe fotografi i shquar Kolë Idromeno, krijuesi i peizazheve të mrekullueshme, Vangjush Mio. Dhe shfaqen më pas portretet që të mbeten në mendje të motrave Androniqi dhe Sofia Zengo, tablotë me frymën e thellë popullore të Abdurrahim Buzës, portretet dhe peizazhet e mjeshtrit Sadik Kaceli, për ta mbyllur me piktorin me famë botërore, Ibrahim Kodrën, ku mbresëlënëse është dhe piktura e tij e fundit, e mbetur përgjysmë.', 9.50, '2024-05-30T16:24:00.024Z', 'Paper', 13, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355515, '321.jpg', 'Krijesat E Nje Dite ', '2024-05-30T16:24:00.024Z', 218, '“Krijesat e një dite dhe rrëfenja të tjera të psikoterapisë” ofron një përshkrim inteligjent e të dhembshur të shpirtit njerëzor. Dhjetë histori, ku pacientët përballen me ankthin për vdekjen, për humbjen e njerëzve të dashur dhe, më të fundit, për humbjen e vetvetes. Çfarë e bën jetën të vlefshme për t’u jetuar? Çfarë mund të bëjmë për t’u dhënë kuptim ditëve tona? Gjatë karrierës së tij të gjatë, autori Irvin Yalom i ka nxitur pacientët dhe lexuesit të përballen me dy sfidat madhore: të gjithë do të vdesim një ditë dhe e kemi vetë në dorë ta bëjmë kuptimplotë jetën tonë. ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 14, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355616, '322.jpg', 'Psikologjia ', '2024-05-30T16:24:00.024Z', 180, 'Një libër mjaft i lexueshëm, ngacmues dhe i shkruar bukur, që kombinon informacionin faktik me një ndershmëri, për t’u vlerësuar, në lidhje me kufizimet aktuale të njohurive. Ai na sjell të gjallë atë që e bën tërheqëse psikologjinë, kuptimin, rëndësinë dhe sfidat e saj tipike. Anthony Clare ‘një hyrje e shkëlqyer ... shumë e këndshme dhe e lehtë për t’u lexuar, jashtëzakonisht konçize dhe e saktë, dhe me një këndvështrim kritik e të sofistikuar ndaj metodave të kërkimit.’ Michael Argyle, Universiteti i Oksfordit ', 5.95, '2024-05-30T16:24:00.024Z', 'Paper', 43, 20);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123350, '27.jpg', 'Banesa Shqiptare Ne Qoshk', '2024-05-30T16:24:00.024Z', 214, ' Përshkrimi i banesave shqiptare ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 44, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123548, '250.jpg', 'Vepra Te Zgjedhura 5 ', '2024-05-30T16:24:00.024Z', 480, 'Tregime kritike të zgjedhura nga Çehovi. ', 14.90, '2024-05-30T16:24:00.024Z', 'Paper', 12, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123353, '31.jpg', 'Këtu Ka Qenë Roma', '2024-05-30T16:24:00.024Z', 188, ' Libër që tregon se si ka qenë Roma dhe ku... ', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 9, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355325, '331.jpg', 'Nderi I Heshtur ', '2024-05-30T16:24:00.024Z', 386, 'Historia fillon me Hiroko Takashimaya, një vajzë e re japoneze, e cila vjen në Amerikë për të studiuar në një universitet të njohur në Kaliforni. Babai i saj, një profesor prestigjioz, e dërgon atë për të jetuar me xhaxhain e saj dhe familjen e tij në Kaliforni. Megjithatë, jeta e Hirokos ndryshon në mënyrë dramatike pas sulmit të Pearl Harbor-it në vitin 1941, kur SHBA hyn në Luftën e Dytë Botërore dhe japonezët në Amerikë fillojnë të përballen me diskriminim dhe internim. ', 12.95, '2024-05-30T16:24:00.024Z', 'Paper', 9, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355426, '332.jpg', 'Premtim Dashurie ', '2024-05-30T16:24:00.024Z', 401, 'Nga dhoma e Kezias nuk vinte as zhurma më e vogël. Nuk kishte as dhjetë minuta që ishte shtrirë në divan, por ndihej tepër i tensionuar dhe nervoz për të marrë një sy gjumë. Ishte sikur të kishte folur, biseduar, diskutuar ditë të tëra. Frika e tij më e madhe ishte se mos e trembte deri në atë pikë sa ta detyronte të ikte, të bënte ndonjë veprim të gabuar që ta detyronte tE ia përplaste në fytyrë derën e zemrës dhe të shpirtit të saj. Ja pse ishte atje i shtrirë në atë divan dhe u mjaftua vetëm ta puthte në njërën faqe. Kezia nuk ishte prej atyre grave, të cilave mund tu vërsulesh vrullshëm. Njerëz të tillë humbasin që përpara se të sulmojnë. Por gjatë një nate, ama, ata përshkuan një rrugë shumë të gjatë. Duhej të kënaqej vetëm me kaq. ', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 9, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355438, '368.jpg', 'Shpikja E Tradites ', '2024-05-30T16:24:00.024Z', 400, 'Shumë nga traditat të cilat i mbajmë si me origjinë të lashtë, në fakt janë shpikur relativisht së fundi. Ky libër hulumton disa raste të këtij procesi shpikjeje: krijimi i "kulturës kombëtare" të Uellsit dhe Skocisë; përpunimi i ritualeve mbretërore britanike të shekujve XIX dhe XX; origjina e ritualeve perandorake në Indinë britanike dhe Afrikë; dhe përpjekjet e lëvizjeve radikale për të zhvilluar kundërtraditat e tyre. Ky libër, me shtrirje kaq të gjarë, synon të hetojë ndërveprimin kompleks të së shkuarës me të tashmen, në një studim brilant të ritualit dhe simbolizmit.  ', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 53, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123413, '92.jpg', 'Te Panjohurat E Linkolnit ', '2024-05-30T16:24:00.024Z', 401, 'Përfundimisht, mora zjarr dhe vendosa të shkruaj vetë një libër për Linkolnin. E dija që nuk kisha shtysën, temperamentin, kualifikimin apo aftësinë e nevojshme për të prodhuar një libër me nivel në dobi të studiuesve dhe historianëve. ', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 54, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123420, '99.jpg', 'Maria Skllodovska Kyri ', '2024-05-30T16:24:00.024Z', 404, ' Maria Skllodovska-Kyri (Maria Sklodoëska-Curie) ishte një personalitet i jashtëzakonshëm. Ajo ishte e para përfaqësuese e gjinisë së bukur, e cila në vitin 1893 mori diplomë në Fizikë dhe Matematikë në Universitetin e Sorbonës të Parisit; ishte e para profesoreshë femër në Sorbone; ishte e para femër dhe e vetme ndër katër personalitete botërore që ka marre dy herë çmimin Nobël. Kjo shkencëtare e shquar me kombësi polake është e para dhe e vetmja femër, njëkohësisht personaliteti i parë me kombësi jo franceze, që prehet në Panteonin e Parisit. Libri i shkrimtares polake Ivona Kienzler, e përshkruan Skllodovska-n, bashkë me zbulimet e saj shkencore, jo vetëm si një shkencëtare të shquar, por edhe si një femër që dashuron, por që pengohet nga i dashuri i saj. Për këtë ajo u detyrua të thyejë stereotipet false dhe për dashurinë ishte e përkushtuar të sakrifikonte shumë gjëra.', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 3, 48);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123543, '242.jpg', 'Kurpalet ', '2024-05-30T16:24:00.024Z', 288, 'Kurpalet nje liber historik qe te magjeps me pershkrimin e saj historik... ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123575, '278.jpg', 'Plani I Fshehte Mekkormak ', '2024-05-30T16:24:00.024Z', 298, 'Perspektiva e diellit të Mesdheut është joshëse dhe me atë entuziazmin e saj,Tessa i kushton pak vëmendje paqartësisë së babait lidhur me të zotin e shtëpisë, me emrin Grant Sullivan. Gjithsesi, që në çastin kur mbërrin në Nice dhe takohet me Grantin, ajo është e ndërgjegjshme se nuk do të ketë gjëra të zakonshme atë stinë vere. Lidhja e tyre romantike thellohet, por Tessa kupton se do të përballet edhe me gjëra djallëzore, përveç faktit se do të bjerë në dashuri.  ', 5.95, '2024-05-30T16:24:00.024Z', 'Paper', 56, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123587, '291.jpg', 'Une ', '2024-05-30T16:24:00.024Z', 372, 'UNË është e mbushur me dramë, që nga refuzimi i hershëm i punës së Eltonit me partnerin këngëshkrues Berni Topin deri në daljën jashtë kontrollit të superyllit që kryesonte listat e klasifikimit të këngëve; nga miqësia me Xhon Lenonin, Fredi Mërkërin dhe Xhorxh Majkëllin deri te vallëzimi disko me Mbretëreshën; nga drogës, që do ta mbante mbërthyer për me shumë se një dekadë.  ', 13.30, '2024-05-30T16:24:00.024Z', 'Paper', 30, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123366, '41.jpg', 'Trashegimia Arkeologjike E Komunes Se Skenderajt', '2024-05-30T16:24:00.024Z', 205, 'Kërkimet arkeologjike, përnjohjet sistematike të territorit të Komunës së Skenderajt,kanë nisur në vitin 2013 dhe me disa ndërprerje kanë vazhduar deri në mesin e vitit 2017. Ato u kryen nga Instituti Arkeologjik I Kosovës nën drejtimin e autorit dhe po kurorëzohen me botimin e librit “ Trashëgimia arkeologjike e Komunës së Skenderajt" ', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 37);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123525, '220.jpg', 'Antologji E Poezise Suedeze ', '2024-05-30T16:24:00.024Z', 649, 'Në Antologjinë e poezisë suedeze përfshihen 100 poetë suedez , me rreth 550 poezi , në shtrirje kohore prej tre shekujsh ( 1700 – 2000) . Poezitë e përzgjedhura dhe të përkthyera këtu paraqesin vlerat e pa kontestueshme letrare , pjesa dërrmuese janë perla të poezisë suedeze në përgjethsi. ', 9.95, '2024-05-30T16:24:00.024Z', 'Paper', 39, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123412, '91.jpg', 'Liri Belishova Dhe Koha E Saj ', '2024-05-30T16:24:00.024Z', 243, ' Nëse do të përpiqeshim ta katalogonim në një gjini të përcaktuar veprën që sot po i paraqitet lexuesit shqiptar, mund të kishim ndonjë vështirësi në emërtim, gati sui generis. Pena e sigurtë, e konsoliduar, mjeshtërore e shkrimtarit, përkthyesit e estetit letrar Bashkim Shehu, na sjell kësaj radhe të konceptuar në një mënyrë moderne dhe mbase jo fort të rrahur në lëminë e letrave shqipe, një vepër që mbart të gërshetuara sa tiparet e një analize të mirëfilltë studimore të karakteristikave të komunizmit shqiptar e atij ndërkombëtar të ish-kampit socialist, por po aq edhe rrugëtimin biografik tragjik të njërës prej protagonisteve të skenës politike shqiptare të pas vendosjes së komunizmit në Shqipëri, Liri Belishovës. Por, rasti Belishova, është vetëm ilustrimi i një analize të thelluar, shterruese, të kontekstit politik e ideologjik të kohës në Shqipërinë që rrëshqiti shumë shpejt në totalitarizëm. Vepra na vjen si një mozaik i plotë analizash politike, gjeopolitike, përsiatjesh sa filozofike aq edhe letrare e psikanalitike të cilat e kornizojnë, por duke mbajtur në qendër të tyre Belishovën si një ndër shembujt më dramatikë ku mbrojtësja dhe bija e ideologjisë komuniste, shndërrohet në viktimën e saj.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 20);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123564, '265.jpg', 'Nje Ure Fjalesh Mes Nesh E Tjetrit ', '2024-05-30T16:24:00.024Z', 401, 'Ky libër është një reflektim i thellë mbi marrëdhëniet njerëzore dhe mënyrën se si fjala mund të shërbejë si një mjet komunikimi dhe kuptimi mes njerëzve. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123444, '105.jpg', 'Hyrje Ne Biznes ', '2024-05-30T16:24:00.024Z', 783, ' Hapja e dyerve ndaj botës së biznesit përmban shumë sfida, si për pedagogët,ashtu dhe për studentët. Qëllimi i këtij teksti është të sigurojë çelësin e suksesit që do të çojë në një përvojë shpërblyese edukative dhe do të krijojë mjedisin e duhur për të bërë karrierë në biznes. Hyrja në biznes mbulon një hapësirë të madhe, duke prekur të gjitha fushat kryesore funksionale të biznesit. ', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 45);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123529, '224.jpg', 'Kosova Dhe Lajkat ', '2024-05-30T16:24:00.024Z', 401, '  O nuk të linda për t’u dridhur para armikut , dëgjjohet një brimë misterioze nga thellësirë e tokës , por të linda e të rrita me shira lotësh që të jesh sokol maje shkëmbi , të rrokësh jakë për jakë me dhunuesin , oj preja e ligë e armikut e futa e zezë e kombit . Ke hapur sytë , ke shtrirë duart dhe kërkon të të lirojnë të tjerët . Si mund të ngjajë ajo , kur ti je gjunjëzuar aq poshtërisht nga ethet e frikës duke u shtrirë për tokë si stërvinë e qelbur .', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123530, '225.jpg', 'Ndre Mjeda ', '2024-05-30T16:24:00.024Z', 124, ' Përvijon portretin letrar të shkrimtarit të madh në 150-vjetorin e lindjes, i cili kaloi nëpër tri formacione stilistike letrare për të mbetur përgjithmonë liriku klasik i shqipes. ', 3.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123381, '59.jpg', 'Arti Ne Rezistence ', '2024-05-30T16:24:00.024Z', 809, 'Libri ndahet në tri pjesë. Në fillim jepen analizat socio-politike e viteve ’90 kur është instaluar apartheidi në Kosovë dhe se si është reflektuar shtypja masive në mobilizimin e shoqërisë dhe kulturës kosovare. Teza e Maliqit është se si përgjigje ndaj represionit serb janë krijuar modele inventive të rezistencës që jo vetëm se nuk e lejuan degradimin dhe akulturimin (çka ishte qëllimi i Serbisë) por paradoksalisht, kontribuuan në përparimin dhe avancimin e krimitarisë artistike. Pjesa qëndrore e argumentit të Maliqit është ekspozita e artit bashkëkohor kosovar në Beograd e vitit 1997, e titulluar në gjuhën shqipe „Përtej“, që ka sjell një kthesë historike për artet pamore tona, duke i përafruar ato me artin bashkëkohor botëror. Në pjesën e dytë , Maliqi kronologjikisht sjell kritikat mbi projektet artistike të viteve ’90 të dy rrymave, të atyre moderniste, dhe të atyre postmoderniste ose konceptuale.Shquhen analizat e Maliqit të veprave të Gjelosh Gjokajt, Agim Çavdarbashës, Rexhep Ferrit, Simon Shirokës etj. si dhe të Sokol Beqirit, Mehmet Behlulit, Erzen Shkolollit dhe Zake Prelvukajt. Në pjesën e tretë Maliqi bën një paralaks (hark kohor) që lidh vitin ’74 të shekullit XX, me vitin 2014. Ai boton dy shkrime të veta që i ka shkruar si student, njëri është kritikë filozofike e Xhozef Bojsit, artistit botëror më me influencë i pjesës së dytë të shek XX, që Maliqi e vlerëson si utopist. Por pastaj ky shkrim është temë e një dialogu interesant mes Shkëlzen Maliqit dhe Sezgin Bojnikut, antropologut dhe kritikut të artit nga Prizreni, i cili prej vitesh jeton në Finlandë. Aty shtrohet pyetja se në cilin moment duhet filluar qasja historizuese mbi artin kosovar, p.sh. duke e bërë dallimin mes artit modernist dhe artit bashkëkohor. Është ky një debat që vetëm piketon problemin dhe prek lehtë vetëm parimet e një pune të cilën skena e arteve pamore te shqiptarët ende (s’) e trajton sepse ka ngecje serioze institucionale. ', 14.90, '2024-05-30T16:24:00.024Z', 'Paper', 47, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123416, '95.jpg', 'Spiuni Dhe Tradhtari ', '2024-05-30T16:24:00.024Z', 365, 'Historia më e madhe e spiunazhit të Luftës së Ftohtë. Ben Macintyre, në librin e tij "Spiuni dhe tradhtari" tregon një histori tradhtie, jetë të dyfishtë dhe guximi të madh që arriti ta ndryshojë kursin e Luftës së Ftohtë përgjithnjë. ', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 21, 19);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123562, '263.jpg', 'Shkrime Kritike ', '2024-05-30T16:24:00.024Z', 383, ' Shkrimet kritike të James Joyce-it, mbulojnë një hark kohor prej më shumë se dyzet vitesh në jetën e autorit, dhe shënojnë ndryshime me rëndësi në mendimin e tij mbi politikën, mbi marrëdhënien mes letërsisë dhe historisë, si dhe mbi shkrimtarë që ndikuan thellësisht tek ai, si: Mangan, Blake, Defoe, Ibsen, Wilde dhe Shaw. Ky është botimi i parë në shqip i shkrimeve kritike të James Joyce-it, një prej autorëve më të rëndësishëm të shekullit XX. ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123563, '264.jpg', 'Traktat Mbi Metriken ', '2024-05-30T16:24:00.024Z', 223, ' Kur tragjikët grekë e zhvilluan prozodinë greke paraprirëse, pasuan forma korale që janë me kuptimin e plotë të ‘’lira’’. Deri sa një superstrukturë terminologjike iu ngjesh atyre prej shqyrtarëve që as Eskilin e as Euripidin s’ishin vënë ndonjëherë ta lexonin. Mbase kjo terminologji do të jetë mbrujtur nga farë e pastër e njeriut që kurrë s’ka pas dëgjuar vargje, e mbase as do të jetë në gjëndjë të bëntë dallimin e ritmit dantesk nga ai miltonian, nëse do t’ia vinin t’i dëgjonte të lexuar me zë të lartë. ', 3.95, '2024-05-30T16:24:00.024Z', 'Paper', 63, 20);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123382, '61.jpg', ' Arti Prej Zanafilles Te Van Gogh', '2024-05-30T16:24:00.024Z', 978, ' Arti, prej zanafillës te Van Gogh" përmbledh rreth 450 vepra të zgjedhura, sidomos të artistëve, që me vizionet e tyre origjinale zgjeruan kufijtë e gjuhës së pikturës. Janë pikërisht ata artistë që mbajnë parasysh edhe larminë, pasurinë dhe veçoritë jo vetëm të periudhës historike, por edhe të artistëve të veçantë, sepse çdo artist meriton trajtim të posaçëm, qoftë si shprehje e një prirjeje të caktuar, por sidomos si bartës të një vizioni të ri të botës. Libri është i lehtë për te u qëmtuar, mjaft praktik si dhe përmban riprodhime të kryeveprave të kësaj periudhe. Shpresa jonë është që edhe lexuesi të mbetet i prekur nga kjo pasuri e madhe...', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 31, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123539, '238.jpg', 'Mary Edith Durham ', '2024-05-30T16:24:00.024Z', 150, ' Mary Edith Durhami është një mal i lartë, tepër i lartë për te u ngjitur. Të mendosh për veprimtarinë dhe veprën e saj është një tronditje e thellë shpirtërore. Të shkruash sa dhe si duhet është një ndërmarrje e mundimshme, që do shumë kohë. Por nderimi dhe dashuria që ne shqiptarët kemi për të, janë nxitje e frymëzim detyrues. Në pamundësi për te i ngritur një monument, i kushtohet ky libër, në shenjë mirënjohjeje shqiptare, me shumë nderime dhe dashuri. Nga ky libër, shqiptarët do të mësojnë më shumë të vërteta nga historia e tyre, më shumë të dhëna për kombin dhe për vetveten, për qëndrimet e sjelljet e fqinjëve dhe Fuqive të Mëdha, në fillim të shekullit XX.', 7.00 ,'2024-05-30T16:24:00.024Z', 'Paper', 59, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123342, '19.jpg', 'Një Antologji E Vogël E Jetës', '2024-05-30T16:24:00.024Z', 178, 'Një antologji e vogël e jetës” vjen tamam në kohën kur jeta dhe vdekja, që prej Luftës së Dytë Botërore, para 75 vjetëve e deri më sot, nuk kanë qenë ndonjëherë më afër. Nuk kanë qenë ndonjëherë më të miqësuar dhe më bashkëudhëtarë. ', 4.40, '2024-05-30T16:24:00.024Z', 'Paper', 40, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123343, '18.jpg', 'Një Antologji E Vogël E Vdekjes', '2024-05-30T16:24:00.024Z', 148, 'Një antologji e vogël e jetës” vjen tamam në kohën kur jeta dhe vdekja, që prej Luftës së Dytë Botërore, para 75 vjetëve e deri më sot, nuk kanë qenë ndonjëherë më afër. Nuk kanë qenë ndonjëherë më të miqësuar dhe më bashkëudhëtarë. ', 4.40, '2024-05-30T16:24:00.024Z', 'Paper', 40, 16);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355557, '353.jpg', 'Sapiens Nje Histori E Shkurter E Njerezimit ', '2024-05-30T16:24:00.024Z', 440, 'Gjithëpërfshirës, provokues dhe i guximshëm, Sapiens ka sfiduar gjithçka dinim rreth të qenit njeri: mendimet tona, veprimet tona, fuqinë tonë... dhe të ardhmen tonë. 100,000 vite më parë së paku gjashtë lloje humanësh popullonin Tokën. Sot është vetëm një. Ne. Homo sapiensët. Si ia doli lloji ynë të pushtojë botën? Pse u bashkuan paraardhësit tanë për të krijuar qytete dhe mbretëri? Si filluan të besojnë te perënditë, kombet dhe të drejtat e njeriut? Si do të jetë bota jonë në mijëvjeçarët që do të vinë? ', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 21, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355560, '356.jpg', 'Misteret E Fundit ', '2024-05-30T16:24:00.024Z', 288,  ' Mistere', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 6, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123592, '296.jpg', ' Estetika E Muzikes', '2024-05-30T16:24:00.024Z', 182, ' Në shekullin XIX estetika ishte sfera më e lartë e mendimit muzikor, ndërsa sot kritikuesit e saj shprehin dyshimin se është një spekulim i zbrazët, tepër larg realitetit muzikor sa të mund ta prekë apo të mund të ndikojë vërtet mbi të. Nga ana tjetër, nuk mund të mohohet se gjykimet mbi muzikën, e madje çdo aktivitet muzikor, janë produkt supozimesh estetike për të cilët duhet domosdoshmërisht të ketë ndërgjegjësim nëse kërkohet që të vihen përballë proves së fakteve, apo të mbahet distance kritike. ', 7.80, '2024-05-30T16:24:00.024Z', 'Paper', 32, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123538, '237.jpg', 'Shtatembedhjete Shtatori Ditar Nga Burgu ', '2024-05-30T16:24:00.024Z', 287, 'Ditar nga burgu ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123593, '297.jpg', 'Ditari Roze 2 ', '2024-05-30T16:24:00.024Z', 184, 'Një shembull i bukur i "mangas së re" franceze, ku vështirësitë e adoleshencës dhe ëmbëlsia e dashurisë përzien në mënyrë mjeshtërore me fantazinë stilistike mjaft të hollë të krijueses. ', 4.50, '2024-05-30T16:24:00.024Z', 'Paper', 58, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123594, '298.jpg', 'Ditari Roze 1 ', '2024-05-30T16:24:00.024Z', 192, 'Sioko Tominari, 16 vjeçe, e tronditur, zbulon se djali të cilit katër vjet më parë kishte tentuar dëshpërimisht te i shprehte ndjenjat e saj, këtë vit do të jetë në të njëjtën shkollë me të. Asaj nuk i vjen aspak mirë që Tomi sillet sikur asgjë të mos ketë ndodhur. Dhe, përvec kësaj, ai i prezanton edhe të dashurën e tij, e cila ka vetëm një dëshirë: të bëhët mikesha më e mirë e Kiokos. Shpirtvrarë, Kiokoja përgatitet për një kthim në shkollë, duke u përpjekur të hedhë gjithçka mbrapa krahëve. ', 4.50, '2024-05-30T16:24:00.024Z', 'Paper', 58, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355661, '357.jpg', 'Nje Histori E Shkurter E Kohes ', '2024-05-30T16:24:00.024Z', 401, ' Nje Histori E Shkurter E Kohes ', 9.95, '2024-05-30T16:24:00.024Z', 'Paper', 56, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355362, '358.jpg', 'Bote Paralele ', '2024-05-30T16:24:00.024Z', 478, ' Një udhëtim përmes krijimit, dimensioneve të pafundme dhe të ardhmës së kozmosit. ', 10.50, '2024-05-30T16:24:00.024Z', 'Paper', 11, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355636, '366.jpg', 'Globalizimi Dhe Vetdija Kulturore ', '2024-05-30T16:24:00.024Z', 408, 'Ky libër përmbledh më shumë se 20 artikuj, ligjërata dhe biseda të prof. Fei Xiaotong, nga fundi i viteve 1980 deri në fillim të viteve 2000. Tema e tyre qendrore është se si qytetërimet do të bashkëjetonin në kontekstin e globalizimit të shpejtë. ', 10.80, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355337, '367.jpg', ' Mistere Vellimi 2', '2024-05-30T16:24:00.024Z', 384, ' Mistere , është vazhdimi I fuqishëm dhe iluminues i “Okultit” , duke thelluar hetimin përmes eksperiencave të jashtëzakonshme e të drejtpërdrejta të Wilsonit , në brendësi të paranormales , të okultit dhe të mbinatyrshmes .', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 54, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123400, '78.jpg', 'Jeta Ime Me Stivenin ', '2024-05-30T16:24:00.024Z', 432, 'Ligji i gravitetit bart dhe ruan harmoninë e udhës së trupave qiellorë nëpër pafundësi, ndërkohë që dashuria bart dhe ruan harmoninë në jetën e gjeniut Stivën Hoking, teksa ai endet mes tyre pambarimisht. Rrugëtim mes yjesh, shkencë, kërkime, zbulime, art dhe emocione pa fund, që përçohen prej dëshmisë së gruas që u magjeps nga shkëlqimi i këtij ylli vezullues, fati i të cilit ishte aq i pasigurt, duke u bërë pjesë e rrugëtimit të tij përmes ëndrrave, sfidave, luftërave, rritjes dhe lavdisë, që duket se nuk kanë fund. ', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 13, 19);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123320, '4.jpg', 'Anektoda Burimore', '2024-05-30T16:24:00.024Z', 44, 'Përmbledhja e anekdotave origjinale të Nasradin Hoxhës, njërit prej personaliteteve të rralla historike që zë një vend të rëndësishëm në kulturën dhe folklorin turk dhe jo vetëm turk. Vlera e Nasradin Hoxhës nuk matet me përjetimet e tij, por me mprehtësinë e mendimit, kritikën dhe thumbimin me të cilin ai vetë i rrëfente anekdotat, apo që populli ia atribuon se i ka rrëfyer ai. Rrëfimet e tij tallëse dhe satirike për shumë shekuj janë rrëfyer dhe rrëfehen edhe sot nga turqit kudo që jetojnë. Prandaj, ky libër sjell Nasradinin, anekdotat dhe të bëmat e tij në trajtën origjinale. ', 3.50, '2024-05-30T16:24:00.024Z', 'Paper', 33, 89);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123428, '121.jpg', 'Evropa Monetare ', '2024-05-30T16:24:00.024Z', 224, 'Ky libër përmbledh: Një sintezë leksionesh të strukturuara, pjesë nga libra të autorëve të mëdhenj klasikë, ngjarjet më të rëndësishme ekonomike dhe sociale, si dhe shumë shembuj që ilustrojnë dhe konkretizojnë analizën ekonomike. ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 57, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123500, '191.jpg', 'Edukimi I Stoikut ', '2024-05-30T16:24:00.024Z', 102, 'Ëndrra, kur jetohet me tepri ose bëhet familjare, shndërrohet në një realitet të ri; tiranizon si ai; resht së qeni strehë. Ushtritë e ëndërruara përfundojnë të mundura, si ato që bien dhe rrënohen në përplasjet dhe në betejat e botës. Nuk kam ndier kurrë nostalgji, se nuk kam pasur kurrë arsye për t’u ndier nostalgjik. Në ndjeshmërinë time kam qenë gjithnjë racional. Meqë me jetën time nuk bëra dot gjë, asgjë nuk më përmallon; meqë ajo që nuk ekziston, mund të jetë gjithçka, fare mirë mund të kisha ushqyer shpresa; sot as shpresa nuk kam, se nuk shoh kurrfarë arsyeje pse e ardhmja duhet të jetë e ndryshme nga e shkuara. ', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 4, 6);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123520, '215.jpg', 'Antologji E Poeteve Te Pejes ', '2024-05-30T16:24:00.024Z', 288, 'Peja ka qenë dhe është edhe sot fidanishte e aktorëve të lavdishëm, të piktorëve të mëdhenjë dhe të poetëve të njohur, prandaj kjo antologji do të jetë jo vetëm dëshmi por edhe një hallkë e madhe e artë në zingjirin e gjatë të traditës poetike të qytetit. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 61, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123356, '43.jpg', 'Monument Vëllimi I', '2024-05-30T16:24:00.024Z', 251, 'Një vepër monumentale në shqip dhe anglisht ”Monumenti” që flet dhe ilustron trashëgiminë kulturore dhe historinë. Lexohet edhe si një roman, sepse është shkruar nga një mjeshtër i rrëfimit; sepse ka shumë personazhe, legjenda, histori të gjalla. ', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 38, 15);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123454, '133.png', 'Me Quajne Carli Caplin ', '2024-05-30T16:24:00.024Z', 64, 'Çarli Çaplin është një nga figurat kryesore të historisë së kinemasë. Ishte biri i një çifti aktorësh jo të njohur. Brenda pak vitesh arriti të kapërcente mjerimin në të cilin jetonte, duke u bërë aktori më i famshëm dhe më i paguar i epokës së tij. Në dyzet vjet mori pjesë në më shumë se tetëdhjetë filma, ku ia doli të kryente me sukses edhe aktorin, regjisorin, kompozitorin, si dhe producentin. U konsiderua si një gjeni i kinemasë, fillimisht asaj pa zë, dhe më vonë i kinemasë me zë. Karriera e tij filloi me komeditë, pastaj me filmat sentimentalë dhe dramatikë, për të përfunduar me filmat që denonconin shoqërinë dhe politikën. Krijimi i tij më i madh ishte personazhi i Sharlotit, një vagabond unik i llojit të tij për shkak të mustaqeve, kapelës, shkopit… dhe peripecive të tij, të cilat kanë emocionuar breza të tërë. ', 3.50, '2024-05-30T16:24:00.024Z', 'Paper', 13, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123462, '143.jpg', 'Enciklopedia E Perseve ', '2024-05-30T16:24:00.024Z', 160, 'A e dini pse? Një enciklopedi e rrallë, e ndërtuar në mënyrën më të përshtatshme për fëmijët: duke iu përgjigjur pyetjeve të tyre të shumta. Nëpërmjet fotove të përshkruara hollësisht, si dhe kurioziteteve nga fusha të ndryshme të dijes, ajo ngre pyetje dhe jep përgjigje, duke e bërë mënyrën e të mësuarit më të thjeshtë dhe ndërvepruese. Të gjitha pyetjet që fëmijët ngrenë mbi shkencën, gjeografinë, historinë, njerëzit dhe natyrën, do të marrin përgjigje në këtë libër të këndshëm dhe angazhues. Fotografitë trepërmasore do t’i ndihmojnë ata t’i kuptojnë plotësisht përgjigjet që u jepen pyetjeve të tyre. Ata mund të shohin nga brenda një vullkan, një lule apo edhe trupin e gjarprit, gjë që e bën vërtet të prekshëm informacionin interesant që marrin. A e dini pse kjo enciklopedi është ajo që duhet? Sepse di të japë përgjigje! ', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 28, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123358, '35.jpg', 'Monument Vëllimi 3', '2024-05-30T16:24:00.024Z', 288, 'Një vepër monumentale në shqip dhe anglisht ”Monumenti” që flet dhe ilustron trashëgiminë kulturore dhe historinë. Lexohet edhe si një roman, sepse është shkruar nga një mjeshtër i rrëfimit; sepse ka shumë personazhe, legjenda, histori të gjall ', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 38, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123429, '122.jpg', 'Financat Personale ', '2024-05-30T16:24:00.024Z', 574, 'Mjetet, teknikat dhe ekuacionet harrohen lehtë, ndërsa logjika dhe parimet themelore që nxitin përdorimin e tyre, pasi të kuptohen, do të mbeten dhe do të bëhen pjesë e "personalitetit financiar" të cdo studenti. ', 25.00, '2024-05-30T16:24:00.024Z', 'Paper', 58, 16);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123430, '123.jpg', 'Financat Publike ', '2024-05-30T16:24:00.024Z', 641, 'Ky libër është hartuar për te u përdorur në nivelet universitare, si dhe në programet pasuniversitare në degën e administrimit publik. Lexuesit duhet të kenë njohuri të teorisë mikroekonomike në nivelin e një kursi fillestar. ', 16.95, '2024-05-30T16:24:00.024Z', 'Paper', 51, 86);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355523, '330.jpg', 'Nje Nate Magjike ', '2024-05-30T16:24:00.024Z', 286, ' Romani fokusohet në një ngjarje të përvitshme që zhvillohet në Paris, një darkë ekskluzive e quajtur "White Dinner" që mbahet në një vend misterioz çdo vit, ku pjesëmarrësit veshin rroba të bardha dhe krijojnë një ambient të magjishëm nën qiellin e hapur. Në këtë ngjarje, jetët e katër çifteve të ndryshme kryqëzohen dhe ndryshojnë përgjithmonë.', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 9, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355624, '328.jpg', 'Kopshti I Luleve Sekrete ', '2024-05-30T16:24:00.024Z', 360, ': Londër, panairi i luleve në Çelsi, më i madhi në botë. Nën harqet e ngarkuara me trëndafila, Iris Donati është e lumtur, mes bimëve ndihet si në shtëpinë e saj. Një shtëpi e vërtetë, atë që kurrë s’e pati, sepse që në vogëli është endur nëpër botë vetëm me të atin. Ndërsa përkulet për të parë më mirë një kompozim lulesh, Irisi ngrin në vend: përballë, dy sy që ngjajnë si dy pika uji me të sajtë. Po ata flokë gështenjë. Vajza që ka përpara është identike me të quhet Viola. Edhe ajo i do fort lulet dhe buqetat e saj janë ndër më të kërkuarat në Londër. ', 9.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355539, '369.jpg', 'Origjinat E Pushtetit Prones Pasurise ', '2024-05-30T16:24:00.024Z', 758, 'Shkencat janë të veçanta, por shoqëria shqiptare është një e tërë, dhe kemi nevojë ta kuptojmë atë njëherazi ekonomikisht, politikisht, filozofikisht, sociologjikisht, ndryshe vështrimi izolohet në ndarje hermetike! Profesori dhe Akademiku Artan Fuga vjen përpara lexuesit me një botim të riparë me titull “Origjinat e Pushtetit, Pronës, Pasurisë (në Shqipërinë pas-totalitare)” hedhur së fundmi në treg nga shtëpia botuese Papirus. Botimi vjen me një pako prej dy vëllimesh, “Shoqëria Periferike” dhe “Shoqëria Piramidale” ', 13.20, '2024-05-30T16:24:00.024Z', 'Paper', 57, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355640, '370.jpg', 'Feminizmi Per Te Gjithe ', '2024-05-30T16:24:00.024Z', 170, ' Kritikja e njohur kulturore, Bell Hooks, ofron një vizion mikpritës dhe me zemër të hapur mbi gjininë, seksualitetin dhe shoqërinë, në një volum frymëzues dhe të hapur për publikun. Nëpërmjet një stili angazhues dhe provokues, Bell Hooks na paraqet një teori popullore të feminizmit të bazuar në sensin praktik dhe mençurinë e përvojës. ', 6.10, '2024-05-30T16:24:00.024Z', 'Paper', 65, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123535, '233.jpg', 'Bukureshti I Shqiptareve ', '2024-05-30T16:24:00.024Z', 169, ' Do të gjeni dashurinë e mallin ndër shqiptarët e emigruar në Rumani që nga shekulli XVI, e më vonë të koncentruar në Bukuresht, ku organizoheshin e vepronin në forma e mënyra të ndryshme për ta ruajtur e kultivuar identitetin kombëtar, gjuhën, kulturën, traditat dhe për të ndihmuar atdheut e kauzës kombëtare shqiptare.', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 53, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123360, '37.jpg', 'Nga Ilirët Tek Arbërit', '2024-05-30T16:24:00.024Z', 420, 'Libri që tani po i ofrohet lexuesit është një përmbledhje e dokumenteve historike mbi lashtësinë e kombit tonë iliro-arbëror. ', 13.00, '2024-05-30T16:24:00.024Z', 'Paper', 26, 47);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123383, '62.jpg', 'Brum ', '2024-05-30T16:24:00.024Z', 308, '"BRUM" është një libër që ndërthur gjuhën letrare, zhargonin dhe gjuhën e nënës. Ai përmban dizajn minimal dhe tregime të shkurtëra të shoqëruara me ilustrime. Ndahet në gjashtë kapituj ku secili prej tyre ka formën e vetë gjeometrike, temën dhe ngjyrën karakteristike në të cilën është projektuar. Protagonist i librit është vetë autori edhe brumi nga i cili u gatua në një periudhë tetëvjeçare. ', 7.50, '2024-05-30T16:24:00.024Z', 'Paper', 33, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123445, '106.jpg', 'Logjistika ', '2024-05-30T16:24:00.024Z', 431, 'Liber Universitar ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 23, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123446, '107.jpg', 'Ekonomia E Kosoves ', '2024-05-30T16:24:00.024Z', 309, 'Ekonomia E Kosoves ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 61, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123346, '23.jpg', 'Urtesi Boterore', '2024-05-30T16:24:00.024Z', 421, 'Aforizma nga personalitete botërore ', 8.70, '2024-05-30T16:24:00.024Z', 'Paper', 11, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123596, '300.jpg', 'Traktat Mbi Metriken ', '2024-05-30T16:24:00.024Z', 323, ' Kur tragjikët grekë e zhvilluan prozodinë greke paraprirëse, pasuan forma korale që janë me kuptimin e plotë të ‘’lira’’. Deri sa një superstrukturë terminologjike iu ngjesh atyre prej shqyrtarëve që as Eskilin e as Euripidin s’ishin vënë ndonjëherë ta lexonin. Mbase kjo terminologji do të jetë mbrujtur nga farë e pastër e njeriut që kurrë s’ka pas dëgjuar vargje, e mbase as do të jetë në gjëndjë të bëntë dallimin e ritmit dantesk nga ai miltonian, nëse do t’ia vinin t’i dëgjonte të lexuar me zë të lartë. Kujtoj që ‘’vargu I bardhë’’ i Shekspirit shkon nga dhjetë në shtatëmbëdhjetë rrokje, po s’kam ndërmend të zë prapë t’ia numëroj a t’u bëj inventarin. ', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 57, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123597, '301.jpg', '48 Piano ', '2024-05-30T16:24:00.024Z', 401, ' 48 Piano poezi te ndryshme', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123395, '72.jpg', 'Xeh ', '2024-05-30T16:24:00.024Z', 401, 'Libri i tretë i Alban Fejzës, botuar në vitin 2020. Xehet, që qëndrojnë si kuptim prapa emrit të librit "XEH", janë pasuri të çmuara nëntokësore. Nxjerrja e tyre është e kushtueshme, por e merituar për vlerën. Ky libër shërben si një minierë e përpunuar e vlerave të përbashkëta të shoqërisë shqiptare. Përmes krijimtarisë, vepra bashkon poezinë, dizajnin grafik, ilustrimin, arkitekturën, muzikën, filmin, fotografinë, tipografinë, shkollën dhe artin e rrugës. ', 21.95, '2024-05-30T16:24:00.024Z', 'Paper', 32, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123415, '94.jpg', 'Lufta Ime  ', '2024-05-30T16:24:00.024Z', 304, ' Mos e merrni këtë libër si propagandë të nazizmit. Kjo është historia. Historia jonë dhe juaja, historia botërore. Ky libër është i ndaluar me ligj që të përdoret për te u propaganduar dhe për te u ndjekur si program për aktivitet politik dhe në këndvështrimin etiko – moral. Prandaj, mendojmë se duhet lexuar me një sy kritik për të nxjerrë mësimet e duhura që na i ka dhënë vetë gjyqi i historisë.', 17.85, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123000, '304.jpg', ' Sibilat Ne Shkallet Tona ', '2024-05-30T16:24:00.024Z', 228, 'Në një dialog të mprehtë me Europën posthegjemoniste, poeti Rudolf Marku mbetet dishepull i paepur i një shkolle të përveçme, banor malesh dhe anëdetesh, poezia e tij i shmang perspektivat tokësore për të bërë bashk najadat dhe ujqërit. Marku është poet tragjik, por tragjedia nuk është fjala e tij e fundit. Ashtu si Odiseja homerik, ai e vetëzbulon trajektoren e vet si një barrë qëllimi që ia bën udhëtimin shumë më tepër sesa personal. Duke i rënë gjatë navigimit të historisë së kombit të vet, ai i çliron endjet e tij meditative prej përkitjes hapësinore dhe kohore, i familjarizuar me majëmalet e poezisë, ashtu siç parathotë Herakliti, kurrë nuk ia del të mbërrijë në shtëpi, ngase nuk mund të hysh dy herë në të njëjtin qytet. Destinacionet e tij mbeten trishtimi dhe vetmia. ', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 3, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123553, '247.png', 'Nga Ana E Suanit ', '2024-05-30T16:24:00.024Z', 238, 'Në "Nga Ana E Suanit", Proust prezanton një pasqyrë të thellë dhe të ndjeshme të jetës shoqërore dhe emocionale të një grupi personazhesh aristokratikë dhe borgjezë të Parisit dhe provincave të Francës në fund të shekullit të 19-të dhe fillim të shekullit të 20-të. Në qendër të rrëfimit është fëmijëria dhe adoleshenca e protagonistit dhe narratori anonim, shpesh i konsideruar si alter ego i vetë Proust. ', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 66, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123532, '227.jpg', 'Pyetje Te Tjera Ne Albanologji ', '2024-05-30T16:24:00.024Z', 383, ' Siç mund të vërehet dhe nga titulli, "Pyetje të tjera në albanologji – autorë dhe teza" është vijim i një projekti të hershëm shkencor të autorit për rindërtimin prapavajtës të traditës dhe historisë së mendimit shqiptar në antropologji, në letërsi e gjuhësi, në qytetërim, kulturë e besim, duke synuar rikthimin në dritë të njohjes të ndihmesave të autorëve të rendit parësor e dytësor në këto fusha.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 8, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123448, '110.jpg', 'Bazat E Sigurimit ', '2024-05-30T16:24:00.024Z', 416, 'Liber Universitar ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 27, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123449, '111.jpg', 'Tregtia Ne Burse ', '2024-05-30T16:24:00.024Z', 177, '  Liber Universitar', 5.70, '2024-05-30T16:24:00.024Z', 'Paper', 27, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123475, '154.jpg', 'Enciklopedi e Ilustruar ', '2024-05-30T16:24:00.024Z', 92, 'Enciklopedi ', 9.95, '2024-05-30T16:24:00.024Z', 'Paper', 21, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123424, '116.jpg', 'Bazat E Finances Uet ', '2024-05-30T16:24:00.024Z', 636, 'Financa është një disiplinë e gjerë. Megjithëse ajo ka përdorur teorinë ekonomike, parimet e kontabilitetit dhe pasqyrat financiare, financa ka zhvilluar gjithashtu trupin e saj material. Ky i fundit bëhet objekt i tekstit Bazat e financës: hyrje në institucionet financiare, investime dhe drejtim. ', 14.95, '2024-05-30T16:24:00.024Z', 'Paper', 51, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123425, '117.jpg', 'Bazat E Menaxhimit ', '2024-05-30T16:24:00.024Z', 354, 'Liber Universitar ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 28, 52);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123393, '70.jpg', 'Tirana Horizontale ', '2024-05-30T16:24:00.024Z', 387, 'Go west është një idiomë e anglishtes që nënkupton vdekjen, vetëvrasjen. Kjo shprehje ironike është keqkuptuar nga ne shqiptarët, por edhe nga popujt e tjerë, duke e kthyer Europën, dhe Perëndimin në përgjithësi, në një iluzion paradiziak, në një shpëtim të mbramë. Ky dokumentar statik trajton marrëdhëniet midis etikës dhe estetikës, rreket të nxjerrë në pah dramat bashkëkohore që, ndër të tjera, nxisin edhe devijime kulturore. Këto 24 imazhe, 24 plane fikse, të vendosura si në vijën e frontit të lirisë së shprehjes, përbëjnë një sekondë kinema; ato zbehin hendekun midis foto-lajmit dhe përdorimit të fotografisë së çastit, si një medium i shprehjes dhe kreativitetit artistik në epokën e medieve të reja. ',7.00, '2024-05-30T16:24:00.024Z', 'Paper', 7, 19);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123394, '71.jpg', 'Vidhni Si Artist ', '2024-05-30T16:24:00.024Z', 299, 'Në këtë libër rrëfehen 10 gjëra që askush nuk ua tregon për të qenë kreativ. Ky libër është aq i vlefshëm saqë brenda një kohe të shkurtër është shndërruar në një “bestseller” në Amerikë. Themeluesi i konferencës TED, Chris Anderson e vlerëson me një fjalë këtë libër: “I mrekullueshëm”. Në këtë kohë kreativiteti është arma më e fortë për më shumë sukses... Një guidë frymëzuese drejt kreativitetit në epokën dixhitale, “Vidhni si artist” paraqet dhjetë parime transformuese të cilat do t’i ndihmojnë lexuesit të zbulojnë anën e tyre artistike dhe të ndërtojnë një jetë më kreative. Asgjë nuk është origjinale, kështu që përqafoni ndikimet, edukohuni përmes punës së të tjerëve, bëni remix dhe ripërfytyroni që të zbuloni rrugën tuaj. Ndaj, shkruani librin që doni të lexoni, xhironi filmin që doni të shihni. Dhe së fundmi, qëndroni inteligjentë, qëndroni larg borxheve dhe rrezikoni të mërziteni në jetën e përditshme, që të jeni aventurierë dhe guximtarë në imagjinatën dhe punën tuaj. ', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 14, 16);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355366, '336.jpg', 'Boksitet E Dukagjinit ', '2024-05-30T16:24:00.024Z', 289, ' Boksitet E Dukagjinit..', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 44, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355467, '337.jpg', 'Atlasi I Flores Se Shqiperise ', '2024-05-30T16:24:00.024Z', 950, 'Botimi i volumit të parë të “Atlasit të Florës së Shqipërisë” përfaqëson librin e parë të këtij lloji, që pason atë të veprës katërvolumshe të “Florës së Shqipërisë”, të “Dendroflorës së Shqipërisë”, të disa florave rajonale, të “Udhëheqësit Fushor të Florës së Shqipërisë” dhe së fundi të “Excursion Flora ofAlbania”. Kjo vepër përbën një domosdoshmëri në studimet e thelluara në “Florën e Shqipërisë” dhe që do të kontribuojë në studimet e tjera në fushën e pyjeve, kullotave, bimëve aromatike e mjekësore, farmaceutikës, leksikografisë etj. ', 30.00, '2024-05-30T16:24:00.024Z', 'Paper', 44, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123517, '212.jpg', 'Foleja E Dashurise ', '2024-05-30T16:24:00.024Z', 180, 'Vëtem poezi ', 2.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 6);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123340, '16.jpg', 'Kanë Thënë Për', '2024-05-30T16:24:00.024Z', 779, 'Aforizmat , Proverbat dhe fjalët e urta popullore janë elemente të mençurisë , të qytetrimit dhe të kulturës njerëzore. Ato e shprehin filozofinë e jetës , e pasurojnë dhe e fisnikërojnë vetëdijen e njeriut për vetveten , e pasurojnë kulturën gjuhësore me shprehje të kuptueshme të qarta dhe e forcojnë lidhshmërinë e njeriut me njeri . ', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 38, 45);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123590, '294.jpg', 'Moment Muzikor Proze Nga Izraeli ', '2024-05-30T16:24:00.024Z', 270, 'Përshkrimi: Në vëllim janë paraqitur disa nga arritjet më të sukseshme të prozës izraelite të viteve ‘70-‘90. Lexuesi do të gjejë në këto 14 tregime e novela, tema e krijime artistike të mrekullueshme. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123591, '295.jpg', 'Aktori Dhe Zeri ', '2024-05-30T16:24:00.024Z', 155, ' Libër me përmbledhje profesionale nga lënda studimore dhe shkencore e të të kënduarit dhe shtjellimit të elementeve të vokalit në funksion të aktrimit skenik. Për larminë studimore stilistike të teknikës së zërit për aktorë, ky libër e kryen më së miri detyrën e përfaqësimit të domosdoshëm në programet e institucioneve akademike për aktrim. Ky libër evidenton dhe shtjellon qartë nocionet kryesore të terminologjisë e fizionomisë së aparatit të zërit dhe teknikave vokale. ', 2.95, '2024-05-30T16:24:00.024Z', 'Paper', 38, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355463, '359.jpg', 'Pergjigje Te Shkurtra Per Pyetjet Madhore ', '2024-05-30T16:24:00.024Z', 401, 'Kozmologu me famë botërore na jep mendimet e tij të fundit mbi pyetjet më të mëdha për universin, në këtë vepër të shkëlqyer të publikuar pas vdekjes së tij. Si u krijua universi? A do të mbijetojë njerëzimi në planetin tokë? A ekziston jetë inteligjente përtej sistemit tonë diellor? A mund të na e kalojë ndonjëherë në zgjuarsi inteligjenca artificiale?  ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 56, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123507, '202.jpg', 'Vetja Dhe Tjetri ', '2024-05-30T16:24:00.024Z', 255, ' Në këtë vepër, Descombes risjell në vëmendje temat dhe autorët kryesorë të filozofisë së shek. XX (që nga Sartre e Merleau-Ponty, deri te Althusser, Deleuze, Foucault, Lyotard e të tjerë), duke risjellë një pjesë të kontekstit historiko-politik të periudhës që mbulon, si dhe duke zhvilluar një "diskutim filozofik" mbi këto tema dhe autorë.', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 42, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123334, '10.jpg', 'Anektoda Shqiptare 5', '2024-05-30T16:24:00.024Z', 334, ' Kushtuar mërgimtarëve tanë, në shenjë respekti , në 100-vjetorin e Pavarësisë së Shqipërisë. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 35, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123335, '11.jpg', 'Bubrreci Deputet', '2024-05-30T16:24:00.024Z', 255, 'Libri me tregime humoristike – satirike “ BUBRRECI DEBUTET” stigmatizon e dukuri negative të mjedisit tonë të mbushur plot me skena e veprime qesharake dhe tragji komike njëkohësisht. Si të tilla tregimet e këtij libri përkojnë fortë me arealin jetësor të mjedisit shoqëror. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 36, 19);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123426, '118.jpg', ' Bota Pa Kufij', '2024-05-30T16:24:00.024Z', 308, 'Libri "Bota pa kufij" i Kenichi Ohmae është një libër që do të ndryshojë mënyrën se si e shohin menaxherët botën dhe biznesin e tyre, se si ato investojnë, komercializojnë dhe konkurrojnë. ',8.60, '2024-05-30T16:24:00.024Z', 'Paper', 52, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355313, '319.jpg', ' Psikologjia Sociale', '2024-05-30T16:24:00.024Z', 388, 'Shpjegimi i sjelljeve të individit dhe shoqërisë vazhdon të tërheqë vëmendjen e psikologëve të shquar të të gjitha kohërave. Por edhe psikologët shqiptarë, duke përfaqësuar edhe në këtë fushë kulturën dhe nivelin e zhvillimit shqiptar në përgjithësi, kanë nisur të kontribuojnë gjerësisht në fondin e përgjithshëm të shkencës social-psikologjike. Ky libër është një përpjekje për të plotësuar nevojën për informacion aktual e të kompletuar social-psikologjik dhe për një kontribut shqiptar në këtë fushë. Sidoqoftë fjala e fundit thuhet në fund, pasi lexuesi ta lexojë librin… ', 14.95, '2024-05-30T16:24:00.024Z', 'Paper', 56, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355414, '320.jpg', 'Frojdi Dhe Psikanaliza ', '2024-05-30T16:24:00.024Z', 316, ' Nuk ka neutralë në luftën e Frojdit. Admirimi dhe lajkat në njërën anë; skepticizmi dhe përçmimi në anën tjetër. Nuk ka asnjë hiperbolë. Një psikoanalist që aktualisht po mundohet ta mbajë Frojdin në panteonin e heronjve kulturorë mund të kënaqet vetëm me kritika të pamëshirshme kundër atyre që e kalojnë jetën, duke e shfaqur Frojdin si një sharlatan. Por, ka një pikë, në të cilën të dyja palët bien dakord: Qoftë mirë apo i sëmurë, Sigmund Frojdi, më shumë se çdo eksplorues tjetër i psiqikës njerëzore, ka hartuar mendjen e shekullit XX. Vetë egërsia dhe qëndrueshmëria e diktatorëve të tij ishte një atribut i dhunshëm i faktit që idetë e Frojdit vazhdojnë të jenë në fuqi.', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 30, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355317, '323.jpg', ' Pese Leksione Mbi Psikoanalizen', '2024-05-30T16:24:00.024Z', 189, 'Pese Leksione Mbi Psikoanalizen ', 5.90, '2024-05-30T16:24:00.024Z', 'Paper', 30, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123433, '126.jpg', ' Investimet 2', '2024-05-30T16:24:00.024Z', 401, 'Investimet (financiare) përdoret kryesisht për lëndët e analizës së investimeve financiare për studentët e nivelit BA, masterit dhe doktoraturës dhe për të gjithë ata që aspirojnë të bëhen Analistë Financiarë të Certifikuar. Përmes tij, studentët dhe profesionistët e financës njihen me çështjet kryesore me të cilat përballen aktualisht të gjithë investuesit, si edhe pajisen me aftësitë e nevojshme për kryerjen e një vlerësimi cilësor e sasior, jo vetëm të investimeve, por edhe të çështjeve financiare. Materiali mbulon gjerësisht dhe thellësisht modelet e rëndësishme financiare të vlerësimit të çmimit të kapitalit e të letrave të tjera me vlerë, si edhe hipotezat e konceptet e tjera të kërkimit financiar modern, të cilat jo vetëm janë subjekte të kërkimit shkencor, që japin kënaqësi intelektuale, por janë edhe tejet të rëndësishme nga pikëpamja praktike për investuesin e aftë. ', 18.00, '2024-05-30T16:24:00.024Z', 'Paper', 56, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123401, '79.jpg', 'Muhamedi Dhe Karli I Madh ', '2024-05-30T16:24:00.024Z', 399, 'Një rrëfim i rëndësishëm historik. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 53, 25);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123402, '80.jpg', 'Enver Hoxha ', '2024-05-30T16:24:00.024Z', 398, 'Enver Hoxha është biografia më e suksesshme e shkruar deri më tani, e cila i ka kaluar kufijtë e Shqipërisë, duke u përkthyer edhe në anglisht. Gazetari i njohur, Blendi Fevziu sjell një profil ndryshe të diktatorit, duke përdorur kryesisht arkivat sekrete të Partisë së Punës, që janë hapur kohët e fundit, si arkivin personal të famljes Hoxha, dhe dëshmi të protagonistëve. Ndonëse autori ka këndvështrimin e tij për këtë figurë misterioze, sërish ngelet një prej botimeve që nuk anashkalohet kurrësesi nëse do të kuptosh Shqipërinë komuniste gjysmëshekullore dhe tiranin e saj. ', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 33);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123403, '81.jpg', 'Ditari I Che Guevares ', '2024-05-30T16:24:00.024Z', 288, 'Ditët më dramatike të jetës në shënimet personale të Çe Guevares. Takimi sekret I ÇE-së me Mehmet Shehun në Tiranë dhe bisedimet me delegacionin shqiptar në Kubë . ', 8.60, '2024-05-30T16:24:00.024Z', 'Paper', 21, 78);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123378, '55.jpg', 'Historia E Arkitektures Moderne 1', '2024-05-30T16:24:00.024Z', 306, 'Në vëllimin e parë të Historisë së arkitekturës moderne janë dokumentuar origjina e lëvizjes moderne (nga Revolucioni francez e këndej), periudha e parë pioniere me Arts and Crafts të Morris dhe Art Nouveau të arkitekteve Horta, van der Velde, Olbrich, Gaudi dhe Loos, periudha racionaliste e shënjuar nga Le Corbusier, Gropius dhe Bauhaus, Mies van der Rohe dhe nga ekspresionizmi i Mendelsohnit dhe, në fund stina organike, protagonist i së cilës është arkitekti i shquar, Alvar Aalto', 26.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123379, '56.jpg', 'Hyrje Ne Arkitekture', '2024-05-30T16:24:00.024Z', 401, 'Hyrje në arkitekturë, vepër tashmë klasike plotësisht e përditësuar në sistemin e vet ikonografik mbetet një domosdoshmëri për këdo që dëshiron një njohje fillestare të arkitekturës së shkuar dhe të tashme. Është paksa më e zgjeruar se “historia e arkitekturës” që mësohet në shkollat e mesme italiane, e cila lidh me të njëjtin fill artin klasik dhe artin italian dhe që vetëm së fundmi ka marrë në shqyrtim Europën dhe botën, për periudhën “moderne”. Ky libër synon të nxisë një diskutim të gjerë, duke folur pikërisht për shprehitë e marra nga edukimi bazë dhe duke hedhur së paku ndonjë dyshim mbi ndarjen vertikale të “lëndëve”; ashtu si në shkollë diskutimi mbështetet mbi përvojën që studentët eksperimentojnë në tavolinën e vizatimit, po ashtu, duke iu drejtuar një publiku më të gjerë, diskutimi duhet mbështetur mbi përvojën e qytetit që çdokush e zotëron, për të treguar se problemet e arkitekturës nuk janë çështje specialistësh, por prekin interesat e gjithsecilit." ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123533, '232.jpg', 'Kush Jemi Ne Shqipetaret ', '2024-05-30T16:24:00.024Z', 374, 'Në këtë libër, studiuesi dhe shkrimtari, Ndriçim Kulla, ka përmbledh tiparin e shqiptarëve kështu: "Ne jemi një popull i kontrasteve. Kontrastet ekzistojnë dhe brenda karakterit tonë individual. Ne jemi të rezervuar, por individualistë, bujarë, por vuajmë nga kotësia, mikpritës, por edhe hakmarrës, e mbajmë fjalën, por jemi edhe dyshues, mund të shkojmë deri në fund të botës, por nuk duam ta dimë çfarë bëhet pas gardhit të shtëpisë sonë, jemi trima, por në betejat që i zgjedh vetë secili nga ne"...', 9.80, '2024-05-30T16:24:00.024Z', 'Paper', 45, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123534, '234.jpg', ' Kujtime Nga Shqiperia E Eperme', '2024-05-30T16:24:00.024Z', 401, 'ibri ofron një pasqyrë të detajuar të kulturës, traditave, dhe jetës së përditshme të shqiptarëve të asaj kohe, duke përfshirë edhe përshkrime të peizazheve dhe marrëdhënieve shoqërore. Përmes këtij vepre, Degrand sjell një dëshmi të rëndësishme historike dhe antropologjike për rajonin dhe popullsinë shqiptare. ', 8.80 , '2024-05-30T16:24:00.024Z', 'Paper', 45, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355519, '325.jpg', ' Ndryshime', '2024-05-30T16:24:00.024Z', 408, 'Qëndruan të trishtuar pa ia ndarë sytë njeri-tjetrit për një kohë të gjatë. Pastaj, pa thënë as edhe një fjalë, ai u përkul tek ajo dhe pasi e mori fytyrën e saj me ëmbëlsi në pëllembet e veta, e puthi. Ajo i mbylli sytë dhe ndjeu se si buzët e saj shkriheshin në të puthurën e tij, kurse shpirti i dukej sikur po i fluturonte lart në qiell. Asaj iu morën mendtë, prandaj u ngjesh te Piteri, pastaj e ngriti kokën dhe vështroi nga ai gjithë pikëllim, preku me gishtërinj fytyrën e tij, ndërsa doktori i puthte majat e gishtave të saj ', 13.95, '2024-05-30T16:24:00.024Z', 'Paper', 9, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355620, '326.jpg', ' Nese Dashuria Eshte Loje Ja Rregullat', '2024-05-30T16:24:00.024Z', 401, 'Disa nga rregullat e lojës së dashurisë. Psikologia Skot nënvizon: të dashurosh, të humbësh dashurinë, të mësosh mësimet e saj dhe të dashurosh sërish: ja cila është rruga… ', 4.30, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355341, '371.jpg', 'Dija Universiteti Dhe Demokracia ', '2024-05-30T16:24:00.024Z', 350, 'Në ditët tona, debati mbi Universitetin dhe vetë idea e Universitetit janë shumë të ndryshme nga disa prej debateve më të mëdha mbi universitetin që janë zhvilluar në shekullin e 19-të dhe në gjysmën e parë të shekullit të 20-të, ose edhe pas Luftës së Dytë Botërore. Vizionet grandioze dhe programatike mbi universitetin modern, të parashtruara në disa vepra madhore nga mendimtarë të shquar si, Wilhelm von Humboldt, John Henry Newman, John Dewey, Karl Jaspers , Talcott Parsons Jürgen Habermas dhe Pierre Bourdieu, kanë reflektuar besimin tek universiteti si një institucion që ka një mision moral dhe kulturor iluminist në shoqëri. ', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 10, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123355, '33.jpg', 'Lidhja Shqiptare E Prizrenit', '2024-05-30T16:24:00.024Z', 754, '“Lidhja Shqiptare e Prizrenit”, ishte një organizatë patriotike revolucionare e mbarë shqiptarëve pavarësisht nga përkatësia fetare, shoqërore dhe krahinore, e cila veproi në kushtet e sundimit shekullor osman dhe në vorbullën e Krizës Lindore të viteve 70 të shek. XIX, për të realizuar programin e Rilindjes Kombëtare Shqiptare: mbrojtjen e tërësisë tokësore të atdheut dhe krijimin e shtetit kombëtar shqiptar. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 44, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123371, '48.jpg', 'Shtepia E Kishes II', '2024-05-30T16:24:00.024Z', 312, ' Tregon arkitekturën e Shtepise se Kishes ', 17.20, '2024-05-30T16:24:00.024Z', 'Paper', 45, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123578, '281.jpg', ' Ceshtja Karavaxho', '2024-05-30T16:24:00.024Z', 422, ' Gabriel Aloni, restaurues veprash arti dhe agjent sekret, ndodhet në Venecia, ku policia italiane i bën një kërkesë të pazakontë. Tregtari i veprave të artit, Xhulian Isherudi, është përballur me një skenë drithëruese krimi dhe po mbahet si i dyshuar. Viktima është një ish-agjent, i cili ruan një të fshehtë; ai është trafikant veprash arti në shërbim të një koleksionuesi misterioz. Për të shpëtuar mikun e tij, Gabrieli duhet të gjurmojë pikturën më të kërkuar në botë... ', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 64, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123579, '282.jpg', 'Vajza Angleze', '2024-05-30T16:24:00.024Z', 424, '  Madalena Harti është një vajzë e bukur, e zgjuar dhe e etur për sukses, me një të ardhme të ndritur në qeverinë britanike. Ajo vjen nga një fëmijëri e varfër, por mbart edhe një të fshehtë të errët: është e dashura e kryeministrit Xhonatan Lankaster. Pasi Madalena zhduket në ishullin e Korsikës, mësohet se rrëmbyesit e saj janë në dijeni të këtij fakti dhe kanë ndër mend ta bëjnë kryeministrin britanik t’i paguajë shtrenjtë mëkatet e tij. Nga frika e një skandali që mund t’i shkatërrojë karrierën politike, Lankasteri vendos ta zgjidhë çështjen privatisht, pa përfshirë policinë. ', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 64, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123469, '148.jpg', ' Me Quajne Musine Kokalari', '2024-05-30T16:24:00.024Z', 64, 'Lindi në Adana të Turqisë dhe kaloi fëmijërinë në Gjirokastër, qytetin përrallor, që i dukej sikur fluturonte. Ajo është shkrimtarja e parë shqiptare, që u vlerësua që në fillim për artin e saj me nivel të lartë. Në shkrimet letrare apo ato publicistike ajo vuri në qendër gruan shqiptare tradicionale dhe shpalosi nevojën për emancipimin e vajzave. Ishte një intelektuale demokrate, antifashiste e antikomuniste e shpallur, që besonte te liria e mendimit dhe te liria e artit. Që gjatë Luftës themelon me intelektualë të tjerë Partinë Social-Demokrate. Mbas çlirimit, luftoi politikisht për mbrojtjen e lirive demokratike dhe të pluralizmit politik. Për këtë arsye, regjimi komunist e burgosi në moshën 27-vjeçare. ', 3.95, '2024-05-30T16:24:00.024Z', 'Paper', 13, 6);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123357, '34.jpg', 'Monument Vëllimi 2', '2024-05-30T16:24:00.024Z', 195, 'Një vepër monumentale në shqip dhe anglisht ”Monumenti” që flet dhe ilustron trashëgiminë kulturore dhe historinë. Lexohet edhe si një roman, sepse është shkruar nga një mjeshtër i rrëfimit; sepse ka shumë personazhe, legjenda, histori të gjalla. ', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 38, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123431, '124.jpg', ' Fjalor Themelor Ekonomik Anglisht Shqip', '2024-05-30T16:24:00.024Z', 153, ' Fjalor ekonomik', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 22, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (1235546, '316.jpg', 'Mbi Psikiken Njerezore ', '2024-05-30T16:24:00.024Z', 182, ' Mbi natyrën e psikikës", të përfshirë në këtë libër ai përshkruan në mënyrë mjeshtërore teorinë e vet të pavdekshme mbi pavetëdijen dhe lidhjet e saj me mendjen e vetëdijshme. Ndërsa në esenë tjetër të mrekullueshme "Mbi energjinë psikike", ai mbron dhe interpreton teorinë e libidos, një tjetër gur themeli në ndërtesën madhështore të veprave që ai i la psikologjisë dhe një faktor kyç që shërbeu për ndarjen e madhe nga Frojdi.', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355511, '317.jpg', 'Burri Qe Pandehu Gruan Per Kapele ', '2024-05-30T16:24:00.024Z', 280, 'Ky libër është i rrallë sepse sjell përmes punës së një psikiatri dëshmitë e personave me dëmtime neurologjike, shumica e të cilëve shfaqin dhunti të gjenisë njerëzore në matematikë, art etj. The New York Times Review of Books thotë për këtë libër: Depërtues.... me kthjelltësinë dhe aftësinë e një rrëfyesi të talentuar ', 10.60, '2024-05-30T16:24:00.024Z', 'Paper', 38, 21);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123465, '145.jpg', 'Une Di ', '2024-05-30T16:24:00.024Z', 305, 'Një libër për më kureshtarët? Për ata që nuk ngopen kurrë me informacion dhe që duan të mësojnë gjithçka për gjithçka? Ky është i duhuri! Në të do të mësoni për avionët më të shpejtë, për peshkaqenët më të frikshëm dhe për rekordet më të çuditshme. Galeria e madhe e fotove që do të gjeni në brendësi të librit, titujt dhe kërshëritë, faktet e pabesueshme e shumë të tjera, do të jenë një thesar që ka gjithmonë diçka për të treguar. Ky libër duket sikur thotë: Më pyet, dhe do të të përgjigjem. Po ashtu, do të të mësojë si të zbarkosh në një kometë, si të shëtisësh në hapësirë dhe si t’i zbulosh mrekullitë e botës sonë. Kështu, do të thuash pa frikë: Unë di! ', 24.00, '2024-05-30T16:24:00.024Z', 'Paper', 28, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355612, '318.jpg', ' Psikologjia E Intelegjences', '2024-05-30T16:24:00.024Z', 156, 'Ne kete liber doctor Jung, I cili eshte autori i disa prej hipotezave me provokuese ne psikologjine modern, pershkruane ate qe ai e quan nje funksion te mirfillte fetar ne mendjen e pavetedijeshme. ', 6.90, '2024-05-30T16:24:00.024Z', 'Paper', 45, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123498, '189.jpg', 'Baza E Moralit ', '2024-05-30T16:24:00.024Z', 345, 'Do të binim në një gabim të madh dhe shumë fëminor nëse bësonim se të gjitha veprimet e drëjta dhe të ligjshmë të njerëzimit kanë zanafillë morale. Përkundrazi, është e vërtetë se midis drëjtësisë së ushtruar nga njerzit dhe ndershmërisë së mirfiltë të zëmrës, ekziston një lidhje analoge si ajo midis shprehjes së mirësjëlljes dhë dashurisë së sinqërtë ndaj tjetrit. Vëtëm dashuria e sinqërtë është në gjëndje ta mundë egoizmin realisht, jo vëtëm në dukje, ashtu siç bën mirësjellja. ', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 23);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123398, '76.jpg', ' Ali Baba', '2024-05-30T16:24:00.024Z', 198, ' Sot, Jack Ma (MaYun) është një prej gjigantëve të botës së internetit. Kompania e tij, Alibaba, është bërë platforma më e madhe në botë për tregtinë online. Ngritja e Jack Ma-së dhe Alibaba-s ka qenë integralë për zhvillimin e ekonomisë së stërmadhe të internetit në Kinë. Ky libër paraqet përvojat jetësore të Jack Ma-së, karrierën e tij si sipërmarrës dhe të gjithë procesin e krijimit të Alibaba-s. Duke shkuar pas skenave, autori tregon se si Jack Ma rrëzoi traditat dhe e ktheu Alibaba-n në një organizatë të fuqishme, e cila theu rekordin botëror si oferta më e lartë për një kompani publike gjatë regjistrimit në bursën e New York-ut në vitin 2014.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 49, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355632, '362.jpg', 'Shoqeria E Papersosur ', '2024-05-30T16:24:00.024Z', 204, 'Kështu, pra, në qoftë se "Klasa e re" është përgjithësim i përvojës tragjike të një luftëtari, "Shoqëria e papërsosur" është fryt I përsiatjeve të gjata të një të burgosuri. Por koha bëri të vetën dhe marrëdhëniet shoqërore duke i kapërcyer teoritë, morën forma të reja.  ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 9, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355333, '363.jpg', 'Gjeniu I Madh  ', '2024-05-30T16:24:00.024Z', 256, ' Libri “Gjeniu i madh Edgar Kejsi”, është një libër ku autori ka dhënë shpjegime dhe ka bërë parashikime për: rimishërimin, vendndodhjen e kapsulës së të fshehtës së njerëzimit, qëllimin e ndërtimit të piramidave, ndikimin e meditimit dhe të ëndrrave në jetën e njerëzve, raportin e trupit me shpirtin, çfarë ndodh me shpirtin pas vdekjes, përshkrimin e jetës në kontinentin e zhdukur të Atlantidës, ndryshimet që do të ndodhin në planetin tonë dhe të ardhmen e njerëzimit.', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
Insert INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123331, '5.jpg', 'Anektoda Botërore', '2024-05-30T16:24:00.024Z', 486, 'Ankedota nga vende të ndryshme të botës. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 11, 6);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123332, '6.jpg', 'Aforizma 2', '2024-05-30T16:24:00.024Z', 168, ' Këto aforizma janë për kohën e sotme për të vë në pah , në dritë, të drejtën , të shtrembëten në jetë dhe në shoqëri , të vërtetën dhe të pavërtetën . ', 3.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123417, '96.jpg', 'Bijte E Nenes ', '2024-05-30T16:24:00.024Z', 278, 'Botime KOHA sjell përmbledhjen e veçantë kushtuar Shërbimit Shëndetësor të Shoqatës humanitare bamirëse “Nëna Tereze” Nën përkujdesjen dhe përcjellë me komentet e dr. Gani Demollit, lexoni se si lindi shërbimi më unikal shëndetësor, i cili mundësoi mbijetesën e popullatës civile kosovare në kohët e represionit më të ashpër dhe të luftës. Kuptoni, nëpërmjet raporteve të atyre pak mediumeve të shkruara të Kosovës të viteve ’90-a, se sa e vështirë ishte lufta e këtyre mantelbardhëve për t’i dhënë shpresë popullit. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 38, 19);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123418, '97.jpg', 'Ditari I Nje Izolanti ', '2024-05-30T16:24:00.024Z', 360, 'Mos e përlyej murin me gjak - i kishte thënë mjeku kasap Kolë M. Berishës në Leskovc, teksa ua kishte bërë me dije milicëve se mund të vazhdonin ta rrihnin deri në alivanosje, sepse vlerësonte se ende kishte fuqi për ta përballuar rrahjen brutale. E kishte vlerësuar, bashkë me xhelatët e tjerë, se "krimi" për të cilin akuzohej: refuzimi që te i ndërrohej emri i shkollës së mesme "Luigj Gurakuqi" në Klinë, ku kishte qenë sekretar, meritonte ndëshkimin që do të shërbente si shembull se çfarë mund te i gjente të gjithë ata që ndanin mendimin me të. Është libër-dokument të cilin duhet ta lexojnë sidomos brezat e rinj, sepse paraqet një pjesë shumë të rëndësishme të historisë sonë që dëshmon se çlirimi dhe pavarësia e Kosovës ndodhën si rezultat i përpjekjeve, shpesh mbinjerëzore, të patriotëve që nuk luftuan për famë e pasuri, por për mbijetesën dhe mirëqenien e popullit të cilit i takojnë. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 38, 23);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123566, '267.jpg', 'Antologji E Prozes Bashkekohor ', '2024-05-30T16:24:00.024Z', 490, 'Nëpërmjet kësaj antologjie nuk mëtojmë t’I kemi dhane nji përgjigje përfundimtare pytetjes nëse ekziston ndonjë prozë bashkohore shqiptare. Përgjigjen mund ta nxerrin vetë lexuesit. ', 9.90, '2024-05-30T16:24:00.024Z', 'Paper', 48, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355568, '338.jpg', 'Enciklopedi Gjeografike E Europes ', '2024-05-30T16:24:00.024Z', 191, 'Në këtë libër lexuesi do të gjejë, për herë të parë, një informacion të përmbledhur mbi të gjithë shtetet e popujt europianë, të dhëna mbi shtrirjen gjeografike, historinë e lashtë e të re, qytetet, natyrën, klimën, ekonominë, demografinë, turizmin etj.  ', 6.60, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355669, '339.jpg', ' Zoohigjiena', '2024-05-30T16:24:00.024Z', 332, 'Intensifikimi i prodhimtarisë blegtorale dhe kushtet në të cilat ajo zhvillohet kërkojnë sjellje më cilësore ndaj zgjedhjes së kësaj çështjeje. Mjedisi përreth, në të cilin kafshët qëndrojnë dhe prodhojnë, ndikon në mënyrë të drejtpërdrejtë ose të tërthortë në mekanizmat reagues, në prodhimtarinë dhe në shëndetin e kafshës. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 54, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355478, '348.jpg', 'Outlook Interneti Dhe Komunikimi Moduli 7 ', '2024-05-30T16:24:00.024Z', 121, 'Libri bazat e teknologjisë informative dhe komunikuese përbëhet prej dy pjesëve : pjesa e parë ka të beje me shfletimin e Internetit , kërkimin dhe gjetjen e informative , kurse pjesa e dytë e librit ka të bëje me komunikimin përmes internetit , krijimin dhe dërgimin e email-ave , rregullat e etikës gjatë komunikimit , formatimin dhe drejtshkrimin , etj ', 3.90, '2024-05-30T16:24:00.024Z', 'Paper', 33, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355579, '349.jpg', 'Udhezime Dhe Riparime Elektrike ', '2024-05-30T16:24:00.024Z', 136, ': Ky informacion ofron udhezime të ndryshme , këshilla dhe truke për instalimet më të zakonshme elektrike apo punë të tjera në sistemin elektrik. Në thelb , vetëm një ekspert I trajnuar elektrik duhet të punojë në këto instalime elektrike! ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 30, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123333, '7.jpg', 'Anektoda Nga Thesari Ynë', '2024-05-30T16:24:00.024Z', 215, 'Fillimisht , anektodat I kanë pelqyer për porositë e tyre edukative dhe për humorin që përmbajnë . Sa më shumë që I dëgjoja këto tregime të shkurta e përmbajtsore , aq më shumë më bënin për vete dhe më shtohej dëshira që ti mësoja , qoftë edhe përmendësh . ', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 34, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123426, '119.jpg', 'Drejtimi Financiar Teori Dhe Praktike ', '2024-05-30T16:24:00.024Z', 1100, 'Libri “Drejtimi financiar’’ eshtë hartuar për t’u përdoru kryesisht në kurset bazë të financës në nivelin bachelor dhe master dhe si një tekst pëe t’iu referuar në kurset qe pasojnë apo pas diplomimit. Libri kombinon teorinë me zbatimet praktike:në libër jane dhënë edhe shembuj të shumtë dhe skedarë shoqërues në excel, me anë të të cilëve sqarohet nëpërmjet rasteve konkrete se si teoria gjen zbatim në praktikë ', 37.00, '2024-05-30T16:24:00.024Z', 'Paper', 56, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123471, '151.jpg', ' Nje Shetitje Ne Trupin E Njeriut', '2024-05-30T16:24:00.024Z', 123, ' Enciklopedi për fëmijë ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 48, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123427, '120.jpg', 'Evropa Ekonomike Dhe E Ardhmja E Sa ', '2024-05-30T16:24:00.024Z', 286, ' Objektivi i këtij libri është të bëjë një analizë rigoroze të përmbajtjes dhe të natyrës së Evropës ekonomike dhe sociale që po ndërtohet aktualisht, me qëllim vënien në dukje të forcave dhe dobësive që mund të shpjegojnë krizën e besimit që ajo po kalon. Ai ka gjithashtu për qëllim të tregojë sfidat e ndryshme, raportet e forcave dhe skenarët që do të përcaktojnë Evropën e të nesërmes: midis zonës së shkëmbimit të lirë dhe hapësirës politike të integruar. Ky libër u drejtohet studentëve të shkencave ekonomike dhe sociale, si dhe të gjithë lexuesve të interesuar për këto fusha. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 57, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123501, '192.jpg', 'Politika ', '2024-05-30T16:24:00.024Z', 216, ' Një nga veprat më të famshme të Aristotelit dhe një traktat i mrekullueshëm për qeverisjen dhe mënyrat e saj, për demokracinë dhe raportet e qytetarit me të dhe me shtetin, që i japin këtij vëllimi një vlerë jashtëzakonisht aktuale edhe sot. ', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 14);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123502, '193.jpg', 'Shpirti I Gruas ', '2024-05-30T16:24:00.024Z', 448, ' Kleopatra, mbretëresha e pavdekshme e Egjiptit, "me prejardhje gjysëm maqedonase e (me sa duket) gjysëm greke, "duhet të vendoset gjithashtu mes mbrojtësve të një mbretërie. Shkrimtarët kanë folur shumë për "joshjen e saj seksuale", por historianët që kanë studiuar dokumentat e historisë së saj shkojnë përtej këtij gjykimi sipërfaqësor të personalitetit të saj dhe shohin rolin e saj si administratore dhe mbrojtëse e popullit. Ata na thonë se ajo nuk ishte "veçantërisht e bukur" dhe i joshte burrat e pushtetshëm me anë të aftësive të tjera.  ', 10.50, '2024-05-30T16:24:00.024Z', 'Paper', 45, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123391, '68.jpg', 'Robinson Crusoe ', '2024-05-30T16:24:00.024Z', 357, '"Robinson Crusoe" nga Daniel Defoe tregon historinë e një marinarit që mbijeton për 28 vjet në një ishull të shkretë pas një përmbytjeje. Libri trajton tema të mbijetesës dhe përshtatjes në rrethana ekstreme. ', 12.30, '2024-05-30T16:24:00.024Z', 'Paper', 12, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123354, '32.jpg', 'Lindja E Lashtë', '2024-05-30T16:24:00.024Z', 325, '"Lindja e Lashtë" eksploron civilizimet e hershme dhe zhvillimet kulturore, politike dhe teknologjike të rajonit të Lindjes së Afërt, përfshirë Mesopotaminë, Egjiptin dhe Persinë. ', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 27, 6);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123580, '283.jpg', 'Agjenti Anglez', '2024-05-30T16:24:00.024Z', 600, 'Një pjesëtare e rëndësishme e familjes mbretërore britanike vritet në një sulm me bombë. Shërbimet Sekrete Britanike i drejtohen të vetmit person, i cili mund ta gjejë vrasësin: agjentit legjendar, Gabriel Alon. Në shënjestrën e Gabrielit është Ejmon Kuini, mjeshtër në prodhimin e bombave dhe vrasës me pagesë. Përkrah, Aloni ka ish-komandon dhe vrasësin me pagesë, Kristofer Keler, i cili i njeh mirë aktivitetet e Kuinit. Por, Gabrieli nuk e ka kuptuar ende që ka të bejë me një armik të vjetër, i cili dëshiron vdekjen e tij, më shumë se gjithçka tjetër. Shumë shpejt, ai do të kuptojë se edhe "vdekja" ka anët e saj të mira... ', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 64, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123581, '284.jpg', 'Dhoma', '2024-05-30T16:24:00.024Z', 344, ' Për Xhekun pesë vjeçar, “Dhoma” është e gjithë bota. Aty ka lindur dhe është rritur; aty jeton së bashku me Manë e tij, aty mësojnë, lexojnë, hanë, flenë dhe luajnë. Natën, për siguri, Maja e mbyll në dollap, që të flerë sa herë vjen Plaku Nik. Një roman vërtet i jashtëzakonshëm. “Dhoma” na dhuron një mënyrë krejt të veçantë rreth të folurit për dashurinë, e njëkohësisht na jep një këndvështrim të gjallë të botës ku jetojmë. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 14, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355418, '324.jpg', 'Ps Te Dua ', '2024-05-30T16:24:00.024Z', 460, 'Një histori e ëmbël dhe e hidhur njëkohësisht në një bestseller të padiskutueshëm në të gjithë botën. Një fëmijëri e kaluar së bashku dhe një ndarje e pamenduar kurrë më parë. Vdekja e Xherrit e shkretoi Olin derisa në prag të 30- vjetorit të saj, ai kthehet me një tufë pusullash, të cilat e udhëheqin Olin drejt një jete të re, ku në fund të secilës prej tyre shënon: "P.S. Të dua". Ndërsa pusullat hapen një e nga një dhe viti numëron ditët e fundit, Oli bëhet njëherësh inkurajuese dhe sfiduese. Njeriu që e njihte më mire se kushdo, i tregon asaj se jeta vazhdon. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 58, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355542, '372.jpg', 'Etika Protestante ', '2024-05-30T16:24:00.024Z', 250, ' Njëra prej veprave më të mëdha të sociologut më të madh të shekullit XX, ku paraqitet një analizë e shkëlqyer, por dhe rigoroze e burimeve dhe mënyrave të zhvillimit të shoqërisë kapitaliste. Libri është i pajisur me një numër të madh shënimesh dhe ofron një nga përkthimet më të mira të kësaj fushe.', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355643, '373.jpg', ' Teorite Sociologjike', '2024-05-30T16:24:00.024Z', 401, ' Në të gjitha periudhat historike jeta sociale e individëve bazohet kryesisht në raportet e pushtetit sipas binomit urdhër-bindje.Me formimin e shteteve moderne dhe si rrjedhim afirmimin e parimit të demokracisë, besohej që raportet urdhër-bindje dhe dhunat detyruese, tipike të shteteve autoritare, do të zhdukeshin. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123374, '51.jpg', 'Forma Permbajtja Arkitekturat', '2024-05-30T16:24:00.024Z', 869, '“Forma, përmbajtja dhe Arkitektura – Udhëtim në banesën popullore shqiptare”, i autorëve Maksim Mitrojorgji dhe Joli Mitrojorgji është libri që sjell një vështrim interesant për rrugën që është ndjekur për realizimin e formës në arkitekturën e banesës popullore shqiptare. Ky botim mbi arkitekturën e banesës popullore shqiptare ndjek rrjedhën e një pune kolosale, mbi pesëdhjetë vjeçare, të bërë në Shqipëri, për evidentimin e monumenteve të arkitekturës në përgjithësi dhe atyre të tipologjisë së banesës popullore në veçanti.Në arkitekturën e traditës, jo domodshmërisht duhet të vlerësojmë vetëm atë që shohim si të ndërtuar, një relike me vlerë të trashëguar nga e shkuara. ', 37.00, '2024-05-30T16:24:00.024Z', 'Paper', 10, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123375, '52.jpg', 'Shkolla Kosovare E Mjeshtrit Popullor Shqiptart', '2024-05-30T16:24:00.024Z', 369, 'Shkolla Kosovare E Mjeshtrit Popullor Shqiptar ', 41.00, '2024-05-30T16:24:00.024Z', 'Paper', 6, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123434, '127.jpg', 'Kurthet E Papunesise ', '2024-05-30T16:24:00.024Z', 246, ' Libri “Kurthet e papunësisë” i studiuesit të njohur të çështjeve sociale Kosta Barjaba vjen në një moment kur në Shqipëri, por dhe në botë, diskutimet, analizat, propozimet dhe zgjidhjet për çështjen e punësimit dhe papunësisë janë në fokus më shumë se kurrë. Krahas shqetësimeve për menaxhimin e situatës së borxheve publike apo nxitjen e rritjes ekonomike, papunësia duket se përbën sfidën më të madhe për ekonomitë, qeveritë dhe shoqërinë e sotme. Si ta përballojmë atë? Nga shkaktohet më së shumti papunësia? A kemi gjetur sistemet më të mira të punësimit dhe reduktimit të papunësisë? Është treguesi i përkohshëm i lidhur me ciklin ekonomik dhe krizën globale apo një fenomen gjithnjë e më strukturor për një kategori ekonomish e vendesh të caktuara? A ka një formulë globale për luftën kundër papunësisë? A mund të kopjohen përvojat e të tjerëve në këtë aspekt? Po Shqipëria si duhet të përballet me këtë sfidë? ', 9.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123472, '152.jpg', 'Me Quajne Isak Njuton ', '2024-05-30T16:24:00.024Z', 64, 'Përshëndetje, më quajnë Njuton, Isak Njuton. Në moshën tuaj adhuroja të ndërtoja shpikjet e mia të çuditshme. Një ditë ngrita në fluturim disa balona, të cilave u ngjita disa drita që i frikësuan fqinjët. Sa gallatë! Më pëlqenin shumë edhe orët, kështu që arrita të ndërtoja një orë që funksiononte me forcën e ujit, dhe një ore die!lore, që më bëri të famshëm në gjithë vendin. Por nuk njihem nëgjithë botën për këtë orë, por per një kokërr mollë. Po, po, për një kokërr të thjeshtë molle! ', 3.95, '2024-05-30T16:24:00.024Z', 'Paper', 13, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123435, '129.jpg', ' Kontabiliteti I Kostos', '2024-05-30T16:24:00.024Z', 527, 'Kontabiliteti i Kostos jep informacion të detajuar të kostos i cili është i nevojshëm për menagjimin për të kontrolluar operacionet aktuale dhe klanin për të ardhmen. ', 35.00, '2024-05-30T16:24:00.024Z', 'Paper', 28, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123554, '259.jpg', 'Rrjedhat E Letersise Bashkekohore Shqipetare ', '2024-05-30T16:24:00.024Z', 401, 'Rrjedhat E Letersise Bashkekohore Shqipetare ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 11);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123508, '203.jpg', ' Jete Paralele', '2024-05-30T16:24:00.024Z', 444, '  Ky libër shënon një prej burimeve më të rëndësishme historike për personalitetet dhe epokën në të cilën jetoi Plutarku. Aftësia dhe mjeshtria e tij janë të njohura edhe sot botërisht në mënyrën sesi bëhet jetëshkrimi, duke u shndërruar në këtë mënyrë biografi i parë modern i shumë personaliteteve të shquara.', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 45, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123484, '178.jpg', 'Koha Per Te Ikur ', '2024-05-30T16:24:00.024Z', 289, 'Ray Bradbury është një nga shkrimtarët amerikanë më të njohur në botë. Krijimtaria e tij përfshin romane, tregime, publicistikë, skenare filmash. Vepra e tij është shpërblyer me çmimet më të mëdha letrare, si, Çmimi O’Henry, Çmimi Linkoln etj. Kritikët dhe lexuesit bashkohen në mendimin se 451 Farenheit (Farenheit 451 °) - përkthyer edhe në shqip në vitet ’80 - është kryevepra e këtij shkrimtari tepër aktiv deri në ditët e sotme. Megjithatë, tregimet e shkurtra, mbeten pjesa më përfaqësuese në krijimtarinë e këtij autori. Tematika e këtyre tregimeve sillet që nga realizmi kritik e deri tek futurizmi i subjekteve të së ardhmes. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 43, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123509, '204.jpg', 'Filozofia Moderne ', '2024-05-30T16:24:00.024Z', 664, 'Ekzistenca jonë nuk ka një themel të fundëm; ajo është një fakt brutal për të cilin ne nuk mund të gjejmë asnjë arsye, qëkur të gjitha arsyet janë krijuar brenda jetës dhe jo nga këndëvështrimi jashtë jetës, tek i cili ne kurrë nuk mund të arrijmë. Ankthi drejt vdekjes është ‘ontologjikë’ ; ai shpërhapet mbi fytyrën e ekzistencës në vetvete dhe shkatërron ‘bazën e qenies’. ', 17.60, '2024-05-30T16:24:00.024Z', 'Paper', 51, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123519, '214.jpg', 'Fjalori Kazar ', '2024-05-30T16:24:00.024Z', 296, 'Një bestseller ndërkombëtar, Fjalori Kazar është cilësuar nga The New York Times Book Review si një nga librat më të mirë të vitit. I shkruar në dy versione, në gjininë mashkullore dhe në gjininë femërore, Fjalori është libri imagjinar i njohurive të Kazars, një popull që lulëzoi diku përtej Transilvanisë midis shekullit të shtatë dhe të nëntë. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 3, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123510, '205.jpg', ' Filozofia E Aktualitetit', '2024-05-30T16:24:00.024Z', 204, ' Libri Filozofia e aktualitetit është shkruar në formë bisedash me lexuesin. Ato marrin shkas nga takime e ngjarje që e kanë nxitur autorin për ballafaqimin e ideve me realitetin e kohës, për refleksione të natyrës filozofike, që në epokën e sotme të globalizimit, kur filozofia merr një status të posaçëm, lipset të bëhen praktikë e zakonshme, sepse shërbejnë për të bashkuar në një subjektin njohës dhe subjektin veprues. ', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 63, 9);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123512, '207.jpg', 'Gjuha E Verteta Dhe Logjika ', '2024-05-30T16:24:00.024Z', 193, 'kzistojnë dy lloj parashtrimesh të kuptimtë: parashtrimet analitike (si në matematikë), të cilët janë të vërtetë me përkufizim; dhe parashtrimet që mund të verifikohen nga përvoja. Por nëse është kështu, një pjesë e madhe e filozofisë tradicionale, përfshi etikën, estetikën dhe metafizikën, dhe gjithashtu teologjinë, lidhet me parashtrime që nuk kanë kuptim të drejtpërdrejtë. Ky përfundim i jashtëzakonshëm është në zemrën e këtij libri epokë – bërës, manifesti klasik i pozitivizmit logjik. Më 1936, ai ishte si një frymëmarrje e çliruar; mbi gjysëm shekulli më vonë, forca e tij tronditëse mbetet e njëjtë.   ', 7.80, '2024-05-30T16:24:00.024Z', 'Paper', 45, 5);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123496, '187.jpg', 'Bota Si Vullnet Dhe Perfaqesim 12 ', '2024-05-30T16:24:00.024Z', 304, ' o bashkëkohësve të mi, jo bashkëqytetarëve të mi, por njerëzimit po ia dorëzoj veprën time.... me një rëndesë të brendshme dhe me besimin se herët a vonë do të arrijë tek ata, të cilëve mund t’u drejtohet. Por, nga ana tjetër, qetësisht i dorëzuar të shoh të prekë, në tërësinë e vet, fatin që i takon gjithmonë së vërtetës, në çdo fushë të dijes: fat, që thotë se të vërtetës i është caktuar veçse një triumf i shkurtër, midis dy hapësirave të gjata kohe, në të cilat ajo dënohet si paradoksale ose nënçmohet si banale.E vërteta nuk është një grua e përdalë, që u hidhet në qafë atyre që nuk e dëshirojnë; përkundrazi, ajo është një bukuroshe kaq shumë ngurruese, saqë edhe ai që arrin të sakrifikojë gjithçka nuk mund të jetë i sigurt t’i fitojë favoret e saj. Jeta është e shkurtër, por e vërteta punon me largpamësi e rron shumë gjatë. le ta themi pra të vërtetën!', 8.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 12);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123463, '141.jpg', 'Spihunazhologjia ', '2024-05-30T16:24:00.024Z', 300, 'Jemi me mision! Më saktë, spiuni Spenser Blejk, i njohur ndryshe si Agjenti K është me mision dhe ai është treguar aq zemërgjerë, sa të mbajë shënime të mrekullueshme, tepër sekrete e t’i ndajë ato me ne! Çfarë udhëzuesi! Të bësh tënden mjeshtërinë e spiunazhit, të mësosh si mblidhet informacioni, të ulesh në punishten e falsifikatorit, si dhe të lexosh informacion tërësisht të klasifikuar! Është viti 1958 dhe agjenti britanik ka nisur një mision të fshehtë për të zbuluar një organizatë kriminale. Ndërsa përshkon botën nga Skocia në Berlin, Las Vegas e Kubë, ai regjistron teknikat e tij sekrete që mund t’i gjeni në këtë udhëzues për agjentë të rinj, domethënë, për ju! Shumë dokumente sekrete, një filtër deshifrues dhe zmadhues, kode të fshehta, foto, libërtha brenda librit, dosje të brendshme të palosura, që ju duhet vetëm t’i gjeni e t’i zbërtheni, ashtu si edhe kodet! Epo, nuk është e lehtë të jesh agjent sekret! ', 24.95, '2024-05-30T16:24:00.024Z', 'Paper', 28, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123464, '144.jpg', 'Gjithcka Qe Duhet Te Dini ', '2024-05-30T16:24:00.024Z', 360, 'Kjo enciklopedi e mrekullueshme është një përmbledhje me dhjetë kapituj që grupojnë dhjetë çështje si: makinat, bimët, kafshët, dinozaurët, shkenca, hapësira e të tjera. Në brendësi të këtyre kapitujve ka informacione të shumta mbi tema të shumëllojshme. Të trajtuara me një tekst të qartë, të thjeshtë dhe ndërveprues, ato shoqërohen me 2000 ilustrime të hollësishme, informuese e argëtuese, çlodhëse e angazhuese. Te “Këndi i krijimit” që gjendet në fund të shumë çështjeve të trajtuara, do të mësoni si të krijoni me duart tuaja botën e dinozaurëve, si t’i shtoni bimët me copë, si të krijoni flutura e plot eksperimente të tjera. Fjalorthi i çdo teme ju ndihmon t’i kuptoni më mirë informacionet e marra. Fëmijët do të ndiejnë kënaqësinë e arritjes në rubrikën “Tani e dini!” që gjendet në fund të çdo kapitulli dhe që i ndihmon ata të kuptojnë se kanë mësuar vërtet “gjithçka që duhet të dinë”! ', 25.00, '2024-05-30T16:24:00.024Z', 'Paper', 28, 7);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355680, '350.jpeg', 'Probleme Interesante Matematikore ', '2024-05-30T16:24:00.024Z', 165, 'Në librin e pestë “Probleme interesante matematikore”, si vazhdimësi e katër librave të mëparshëm , janë gjithsej 275 probleme matematikore , si edhe zgjidhjet e tyre nga fusha e matematikës , shumica e të cilave janë interesante dhe argëtuese. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355381, '385.jpg', ' Jul Qezari 15', '2024-05-30T16:24:00.024Z', 192, ' “Jul Çezari” është tragjedia e parë e Shekspirit dhe një nga tri tragjeditë me temë historike. Shekspiri shkruan për Cezarin, Brutin dhe Mark Antonin duke u mbështetur në historianin e lashtë romak Plutarkun. Jul Cezari është gjithashtu një tragjedi, por, pavarësisht nga titulli, karakteri tragjik i pjesës është Bruti, romaku fisnik, vendimi i të cilit, për të marrë pjesë për hir të lirisë, e çon atë, në një konflikt personal dhe vendin e tij në një luftë civile. ', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 11, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355482, '386.jpg', 'Shtepi Kukulle ', '2024-05-30T16:24:00.024Z', 283, ' Një dhomë e mobiluar mirë e me shije, por pa luks. Në fund, nga ana e djathtë, një derë të shpie në korridorin e hyrjes. Një derë tjetër, po në fund, por nga ana e majtë, të çon në dhomën e punës të Helmerit. Midis këtyre dy dyrerve është një piano. Në mes të murit të anës së majtë është një derë dhe, ca më pas, një dritare. Pranë dritares është një tryezë e rrumbullakët me një karrige të madhe dhe me një divan të vogël. Në murin e anës së dhjathtë, në fund, është një derë tjetër.', 5.00, '2024-05-30T16:24:00.024Z', 'Paper', 11, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123567, '268.jpg', ' Antologjia E Letersise Turke', '2024-05-30T16:24:00.024Z', 406, 'Antologji me shembuj përfaqësues nga periudhat kryesore të zhvillimit të letërsisë turke, duke filluar nga periudha paraislame e deri më sot. ', 7.50, '2024-05-30T16:24:00.024Z', 'Paper', 59, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123362, '39.jpg', 'Qyteti Dhe Patologjitë E Jetës Urbane', '2024-05-30T16:24:00.024Z', 400, 'Në qendër të librit vendosen problemet e qytetit, të jetës së përbashkët qytetare, duke i parë dhe vlerësuar me optikën e sociologut. Të gjitha këto e bëjnë librin një “manual” që të ndihmon në perceptimin e zhvillimeve dinamike të qytetit dhe problematikave komplekse të jetës urbane. Është rezultat i angazhimit qytetar dhe intelektual dhe, pa dyshim, edhe i një veprimtarie e pune studimore këmbëngulëse disavjeçare. Nuk është vetëm libër me dimension teorik dhe me synime intelektuale e sociologjike, sepse lënda, përmbajtja dhe struktura e librit është ndërtuar në mënyrë të tillë, ku të reflektohen jo vetëm ide sintetike, që janë produkt i shumë analizave e refleksioneve personale të autorit, por dhe synimi për të ndikuar në trajtë etike e empirike për të gjitha problemet e zhvillimit të qytetit, përmirësimit të statusit të qytetarit dhe dinamikës së jetës urbane. Ide dhe njohuri që janë aktuale, pikërisht tani që ndodhemi në “zemër” të epokës tranzitore demokratike në vendin tonë. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 31, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123568, '269.jpg', 'Fotografite E Kujtimeve ', '2024-05-30T16:24:00.024Z', 218, '  “Fotografitë e kujtimeve” – roman bashkëkohor me vlera letrare dhe islame.', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 59, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123467, '149.jpg', 'Me Quajne Marko Polo ', '2024-05-30T16:24:00.024Z', 64, ' Marko Polo vinte nga një familje veneciane. Ai ndërmori një udhëtim marramendës në Kinë, kur ishte vetëm shtatëmbëdhjetë vjeç. Po aq vite qëndroi në shërbimin e Khanit të Madh dhe jetoi në kulmin e lulëzimit të Dinastisë Mongoliane. Gjatë kësaj periudhe arriti të mësonte për organizmin e atij vendi të paanë, veprat kolosale publike, sistemin e postave, përdorimin e parasë prej letre apo punimin e mëndafshit. Pas kthimit në vendlindje, që nga burgu, ku u burgos rastësisht, Marko Polo mundi të na tregonte përvojën e tij fantastike të mbledhur në Librin e mrekullirave të botës. Konsiderohet si një nga udhëtarët më të mëdhenj të mesjetës, si dhe ai që “zbuloi” Kinën para perëndimorëve. ', 3.95, '2024-05-30T16:24:00.024Z', 'Paper', 13, 6);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123468, '152.jpg', 'Me Quajne Isak Njuton ', '2024-05-30T16:24:00.024Z', 65, 'Përshëndetje, më quajnë Njuton, Isak Njuton. Në moshën tuaj adhuroja të ndërtoja shpikjet e mia të çuditshme. Një ditë ngrita në fluturim disa balona, të cilave u ngjita disa drita që i frikësuan fqinjët. Sa gallatë! Më pëlqenin shumë edhe orët, kështu që arrita të ndërtoja një orë që funksiononte me forcën e ujit, dhe një ore die!lore, që më bëri të famshëm në gjithë vendin. Por nuk njihem nëgjithë botën për këtë orë, por per një kokërr mollë. Po, po, për një kokërr të thjeshtë molle! ',3.95, '2024-05-30T16:24:00.024Z', 'Paper', 13, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123363, '40.jpg', 'Shqiperia E Bukur', '2024-05-30T16:24:00.024Z', 322, 'Albumi i parë i studiuesit dhe publicistit Ndriçim Kulla me titull “Shqipëria e Bukur”, servir një informacion të bollshëm fotografik dhe interpretime kulturoro-historik.Ai është unik në llojin e vet, sepse për herë të parë prezanton përpara lexuesit shqiptar dhe turistit të huaj bukuritë natyrore të Shqipërisë, si dhe pasuritë e jashtëzakonshme të trashëgimisë kulturoro-historike. Nëpërmjet këtij botimi, autori bën një promovim elitar të vlerave turistike të aksesueshme për t’u vizituar dhe destinacioneve të shumta që ka vendi ynë.Albumi, i cili është botuar në shqip dhe në anglisht, shoqërohet me një hyrje nga ana e autorit, gjithashtu edhe me një guidë orientuese për të gjitha pamjet.Ky projekt ka si qëllim kryesor prezantimin dhe promovimin e bukurive të vendit tonë nga Vermoshi pjesa më veriore, e deri në Buntrint, i cili përkon edhe me ekstremin jugor të Shqipërisë. ', 43.20, '2024-05-30T16:24:00.024Z', 'Paper', 45, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123390, '60.png', 'Përtej ', '2024-05-30T16:24:00.024Z', 326, ' Është një libër që zhyt lexuesit në një botë të re dhe të mrekullueshme përtej kufijve të njohur. Me një histori magjepsëse dhe personazhe të thelluar, libri eksploron tema të tilla si aventura, miqësia dhe guximi. Përmes narrativës së tij tërheqëse dhe ilustruarve të bukura, "Pertej" fton lexuesit të shkojnë përtej imagjinatës dhe të zbulojnë mundësi të pafundme.', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123581, '285.jpg', ' Vrasje Ne Orient Ekspres', '2024-05-30T16:24:00.024Z', 401, 'Ndërsa udhëton në trenin legjendar Orient Ekspres, detektivi i pakrahasueshëm e i paarritshëm Herkul Puaro është i detyruar të merret me një vrasje misterioze. Ndërsa treni është i bllokuar në dëborë, një ndër pasagjerët godet për vdekje zotërinë e pasur Rashet. Në të vërtetë, vrasësi është i fshehur midis udhëtarëve të trenit, por në vështrim të parë duket se asnjë prej tyre nuk ka një motiv të fortë për ta kryer këtë krim.  ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 66, 23);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123376, '53.png', 'Arkitektura Sizmike', '2024-05-30T16:24:00.024Z', 205, 'Roli i Arkitektures ne reagimin sizmik te strukturave ', 48.40, '2024-05-30T16:24:00.024Z', 'Paper', 13, 22);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123377, '54.jpg', 'Dimensioni I Perjetimit Dhe Perceptimit Ne Artitekture', '2024-05-30T16:24:00.024Z', 205, 'Trajtimi i arkitekturës ndryshe nga zakonisht, në një dimension më tepër shpirtëror e emocional, është thelbi i këtij libri. Hapësira arkitektonike dhe mënyra se si e perceptojmë atë, si dhe përjetimi i kësaj hapësire, janë indikatorë të fuqishëm në jetën e njeriut. Prandaj, këto dy çështje janë trajtuar jo vetëm në rrafshin arkitektonik, por edhe në atë filozofik, psikologjik e emocional. ', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 12);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123361, '38.jpg', 'Parqet Kombetare Te Shqiperise', '2024-05-30T16:24:00.024Z', 300, 'Hapësira gjeografike dhe trashëgimia natyrore e saj është një nga dimensionet e rëndësishme të çdo qytetërimi. Shoqëria njerëzore e trashëgon atë historikisht, nga brezi në brez dhe këto vlera duhet t’ua përcjellë të padëmtuara apo të tjetërsuara brezave të ardhshëm. Ajo është vlerë natyrore, por edhe materiale, shoqërore e shpirtërore dhe, si e tillë, është edhe vlerë kulturore. ', 40.00, '2024-05-30T16:24:00.024Z', 'Paper', 13, 4);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123569, '270.jpg', 'Ne Kerkim Te Gjuhes Dhe Mendimit ', '2024-05-30T16:24:00.024Z', 287, 'Unë personalisht qysh nga mesi i studimeve të mija erdha në përfundim, që një fenomen interesant ndoshta jo vetëm linguistik është edhe anliza në mes të gjuhës dhe mendimit. Në këtë përfundim kanë ardhur edhe shumë shkencëtarë të njohur gjerman gjatë punës së tyre shkencore, andaj është ky ndoshta edhe një proces i shkencëtarëve që merren me linguistikë. domosdoshëm evolutiv i shkencëtarëve që merren me linguistikë ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 32, 17);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123598, '302.jpg', 'Rumi I Ndaluar ', '2024-05-30T16:24:00.024Z', 283, 'Rumi I Ndaluar liber me poezi te ndryshme... ', 7.95, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123599, '303.jpg', 'Poezi Te Zgjedhura Konstantin Kavafis ', '2024-05-30T16:24:00.024Z', 401, ' Poezi...', 6.00, '2024-05-30T16:24:00.024Z', 'Paper', 31, 13);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123450, '112.jpg', 'Doktrina Shok ', '2024-05-30T16:24:00.024Z', 401, 'Libri "Doktrina Shok" është një sipërmarrje masive e kurajoze, që shpreh kritikën pasionante të Naomi Klein ndaj dhunës që shoqëron imperializmin ekonomik amerikan. Kritikë kjo, që jo vetëm konsiderohet e nevojshme, por është tepër urgjente. ', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 48, 12);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123470, '150.jpg', 'Enciklopedia Ime E Pare Perse ', '2024-05-30T16:24:00.024Z', 96, 'Enciklopedia Ime E Pare Perse ', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 23, 5);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123405, '83.jpg', ' Jeta Ime Autobiografi', '2024-05-30T16:24:00.024Z', 401, '"Jeta ime" e Trockit, vëllimi i të cilit po i jepet sot lexuesit shqiptar, përmban veprimtarinë e Trockit prej fillimit të vitit 1917 e deri në fund të jetës së tij. Pa dyshim, kjo është edhe pjesa më interesante dhe më përfaqësuese e jetës së tij. ', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 11, 89);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123388, '67.jpg', 'Megjithate Publike ', '2024-05-30T16:24:00.024Z', 401, 'Megjithate Publike" është një libër që eksploron ide dhe opinione mbi çështje të rëndësishme shoqërore dhe artistike. Me një qasje kritike dhe analitike, autori ndan pikëpamjet e tij për zhvillimet aktuale dhe sfidat me të cilat përballet shoqëria bashkëkohore, duke ofruar një perspektivë të thelluar dhe të menduar mirë.', 14.95, '2024-05-30T16:24:00.024Z', 'Paper', 21, 18);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123389, '58.png', 'Ngjyrose Lumbardhin ', '2024-05-30T16:24:00.024Z', 280, ' Artistja Rina Krasniqi është ftuar të krijojë ilustrime historike të kinemasë Lumbardhi, bazuar në hulumtimin e kryer nga studiuesit Tevfik Rada dhe Bengi Muzbeg në kuadër të projektit Kinofigurimi ', 12.80, '2024-05-30T16:24:00.024Z', 'Paper', 46, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123473, '153.jpg', 'Libri Im I Pare Me Pyetje Dhe Pergjigje Per Boten ', '2024-05-30T16:24:00.024Z', 135, 'A e dini që bota jonë është plot me gjëra të çuditshme e të pazakonta? Doemos që keni dëgjuar e keni parë. Po kërshëria dhe dija nuk kanë fund. Ky është nga ata lloj librash që ju zgjon kërshërinë e kështu e ju bën të mësoni më shumë. Po si? Në çdo faqe ka disa pyetje. Secila prej tyre është shkruar në kanatin e një dritareje, e cila është zbukuruar me mjeshtëri me ilustrimet përkatëse. Po të hapni kanatin, do të gjeni përgjigjen. Sa i madh ishte Titaniku? Kur u shpik akullorja? Çfarë është treni fluturues? Pse ka këtë emër Deti i Vdekur? Ku u shpikën fishekzjarrët? Cili vend e feston i pari Vitin e Ri? Çfarë ndodh kur kapërdin çamçakëzin?. Hapni dritaret e lexojini përgjigjet. ', 7.50, '2024-05-30T16:24:00.024Z', 'Paper', 60, 10);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123555, '260.jpg', 'Dialog Me Poezine E Lasgush Poradecit ', '2024-05-30T16:24:00.024Z', 229, 'Poezia lasgushiane ështe poezi, e cila arrin te ruajë identiitetin e vet, madje në një kohë të mbushur me ngjarje të shumta e të ërreta, të cillat, jo rrallë, me apo pa vetëdije,ndikonin në rrugën zhvillimore të artit. ', 4.00, '2024-05-30T16:24:00.024Z', 'Paper', 61, 8);
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123466, '146.jpg', ' Enciklopedia E Perseve', '2024-05-30T16:24:00.024Z', 165, ' A e dini pse? Një enciklopedi e rrallë, e ndërtuar në mënyrën më të përshtatshme për fëmijët: duke iu përgjigjur pyetjeve të tyre të shumta. Nëpërmjet fotove të përshkruara hollësisht, si dhe kurioziteteve nga fusha të ndryshme të dijes, ajo ngre pyetje dhe jep përgjigje, duke e bërë mënyrën e të mësuarit më të thjeshtë dhe ndërvepruese. Të gjitha pyetjet që fëmijët ngrenë mbi shkencën, gjeografinë, historinë, njerëzit dhe natyrën, do të marrin përgjigje në këtë libër të këndshëm dhe angazhues. Fotografitë trepërmasore do t’i ndihmojnë ata t’i kuptojnë plotësisht përgjigjet që u jepen pyetjeve të tyre. Ata mund të shohin nga brenda një vullkan, një lule apo edhe trupin e gjarprit, gjë që e bën vërtet të prekshëm informacionin interesant që marrin. A e dini pse kjo enciklopedi është ajo që duhet? Sepse di të japë përgjigje!', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 28, 13);


-------------------------------------------Librat anglisht shtoni---------------------------------------------------------
INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345678, '401.jpg', 'The Art Of Rhetoric ', '2024-05-30T16:24:00.024Z', 210, 'The Art of Rhetoric is a comprehensive exploration of the principles and techniques of persuasive communication. This seminal work delves into the study of rhetoric, the ancient art of using language effectively and persuasively.', 9.95, '2024-05-30T16:24:00.024Z', 'Paper', 12, 25);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345679, '402.jpg', 'Atomic Habits ', '2024-05-30T16:24:00.024Z', 320, 'Atomic Habits by James Clear is a groundbreaking guide to transforming your life through the power of small, consistent changes. Atomic Habits is not only a guide to personal development but also a resource for achieving long-term success and satisfaction. It offers readers a toolkit for optimizing their daily routines, increasing productivity, and achieving their goals by focusing on the power of small, consistent actions.', 7.50, '2024-05-30T16:24:00.024Z', 'Paper', 23, 50);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345680, '403.jpg', 'A Little Life', '2024-05-30T16:24:00.024Z', 450, 'A Little Life is both a celebration of enduring friendship and a poignant exploration of human suffering and recovery. Yanagihara’s narrative is richly textured and emotionally charged, offering an unflinching examination of trauma while highlighting the profound connections that help us navigate our darkest moments.', 8.75, '2024-05-30T16:24:00.024Z', 'Paper', 34, 60);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345681, '404.jpg', 'The Magic Of Wisdom ', '2024-05-30T16:24:00.024Z', 275, 'The Magic of Wisdom is a captivating exploration of the profound and transformative power of wisdom in our lives. This insightful book delves into the timeless principles and practices that have guided thinkers, leaders, and seekers throughout history. It presents wisdom not just as a theoretical concept but as a practical tool for navigating life’s challenges and enriching our personal and professional journeys.', 14.50, '2024-05-30T16:24:00.024Z', 'Paper', 45, 35);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345682, '405.jpg', 'Thinking Fast And Slow ', '2024-05-30T16:24:00.024Z', 390, 'Thinking, Fast and Slow by Daniel Kahneman is a groundbreaking exploration of the dual systems that drive our thinking processes. Nobel Prize-winning psychologist Kahneman presents a comprehensive examination of how we think and make decisions, revealing the interplay between two distinct modes of thought: the fast, intuitive, and automatic System 1, and the slow, deliberate, and analytical System 2.', 19.50, '2024-05-30T16:24:00.024Z', 'Paper', 56, 70);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345683, '406.jpg', 'Shatter Me', '2024-05-30T16:24:00.024Z', 330, 'Shatter Me is a compelling tale of self-discovery, love, and rebellion. Mafi’s lyrical prose and intense storytelling draw readers into a world where power and emotion collide. The novel explores themes of isolation, power, and the struggle to reclaim one’s humanity in a world that seeks to exploit it. Ideal for fans of dystopian fiction and powerful character-driven stories, Shatter Me offers a thrilling and thought-provoking reading experience that will leave readers eagerly anticipating the next installment.', 16.00, '2024-05-30T16:24:00.024Z', 'Paper', 52, 40);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345684, '407.png', 'Animal Farm ', '2024-05-30T16:24:00.024Z', 200, 'Orwell’s incisive narrative and sharp satire provide a powerful commentary on the dynamics of political power and the ease with which ideals can be compromised. Animal Farm remains a significant work for its exploration of the nature of power, propaganda, and the betrayal of revolutionary principles.', 4.25, '2024-05-30T16:24:00.024Z', 'Paper', 14, 30);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345685, '408.jpg', 'Before The Coffee Gets Cold ', '2024-05-30T16:24:00.024Z', 275, 'The story revolves around several customers who visit this café, each with their own reasons for wanting to revisit the past. Through their experiences, the novel explores themes of love, regret, and the passage of time. The characters grapple with their past decisions and relationships, revealing the profound impact of their choices on their lives and those around them.', 11.00, '2024-05-30T16:24:00.024Z', 'Paper', 29, 50);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345686, '409.jpg', '1984 Nineteen Eighty-four ', '2024-05-30T16:24:00.024Z', 310, 'Set in a society where Big Brother, the omnipresent leader, watches every move and thought of its citizens, 1984 examines the consequences of extreme government control and the manipulation of truth. The Party enforces conformity through brutal repression and psychological control, rewriting history to fit its narrative and eradicating any form of dissent. Winston, who works at the Ministry of Truth, becomes increasingly disillusioned with the oppressive regime and seeks ways to rebel. His struggle to maintain his individuality and his quest for truth lead him into dangerous territory, revealing the devastating effects of living in a world where freedom and privacy are obliterated.', 4.10, '2024-05-30T16:24:00.024Z', 'Paper', 51, 90);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97812345687, '410.jpg', 'The Hound Of The Baskervilles ', '2024-05-30T16:24:00.024Z', 275, 'The story is set in the eerie and fog-shrouded moors of Devonshire, where the legendary curse of the Baskerville family comes to life. According to local lore, the Baskervilles are doomed by a spectral hound that haunts their lineage. When Sir Charles Baskerville is found dead under mysterious circumstances, with footprints of a giant hound near his body, Holmes and Watson are called upon to investigate the case. As Holmes and Watson delve into the mystery, they encounter a range of suspects, each with their own motives and secrets. The novel is celebrated for its atmospheric setting, rich character development, and the clever unraveling of a complex plot.', 3.75, '2024-05-30T16:24:00.024Z', 'Paper', 62, 80);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000001, '411.jpg', 'Kosova From The Air', '2024-05-30T16:24:00.024Z', 350, 'Kosova from the Air is a stunning visual exploration of the landscape and cultural heritage of Kosovo, presented from a unique aerial perspective. This captivating book offers readers a breathtaking view of the region s diverse terrain, from its rugged mountains and lush valleys to its historical sites and vibrant cities. Featuring a collection of high-quality aerial photographs, the book provides a fresh and insightful look at Kosovo s natural beauty and architectural marvels. Each image captures the intricate patterns of the land and the interplay between human activity and nature, revealing the region s rich historical and cultural tapestry.', 42.50, '2024-05-30T16:24:00.024Z', 'Paper', 34, 45);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000002, '412.jpg', 'The Art Of War', '2024-05-30T16:24:00.024Z', 280, 'The Art of War is known for its practical wisdom and strategic foresight, which have been applied not only in military contexts but also in business, leadership, and personal development. Sun Tzu s teachings on efficiency, flexibility, and strategic thinking offer valuable lessons for navigating complex situations and achieving success.', 9.99, '2024-05-30T16:24:00.024Z', 'Paper', 12, 88);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000003, '413.jpg', '12 Rules For Life', '2024-05-30T16:24:00.024Z', 340, '12 Rules for Life is not only a self-help book but also an exploration of existential themes and human behavior. It offers readers practical advice for navigating the complexities of modern life while encouraging deeper self-reflection and personal development. Ideal for those seeking guidance on how to approach life’s challenges with resilience and purpose, 12 Rules for Life provides a compelling blend of wisdom and practical advice that resonates across diverse audiences.', 22.75, '2024-05-30T16:24:00.024Z', 'Paper', 22, 63);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000004, '414.jpg', 'Body Keeps The Score', '2024-05-30T16:24:00.024Z', 410, 'The Body Keeps the Score explores innovative therapeutic approaches and techniques that can help individuals recover from trauma. From traditional methods like talk therapy to newer approaches such as EMDR (Eye Movement Desensitization and Reprocessing), neurofeedback, and mindfulness, Dr. van der Kolk provides a comprehensive overview of treatments that address both the mind and body.', 17.95, '2024-05-30T16:24:00.024Z', 'Paper', 50, 74);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000005, '415.jpg', 'The Concise 48 Laws Of Power', '2024-05-30T16:24:00.024Z', 230, 'The Concise 48 Laws of Power provides readers with practical insights into navigating social and professional interactions, understanding power structures, and achieving success. Whether you are interested in personal development, leadership, or understanding the nature of influence, this concise edition offers a valuable and efficient resource for mastering the art of power.', 8.49, '2024-05-30T16:24:00.024Z', 'Paper', 41, 89);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000006, '416.jpeg', 'Harry Potter And The Philosopher S Stone Vol 1', '2024-05-30T16:24:00.024Z', 420, 'The story begins with Harry s ordinary life with his unpleasant relatives, the Dursleys, until he receives a letter revealing that he is a wizard and has been accepted into Hogwarts School of Witchcraft and Wizardry. At Hogwarts, Harry discovers his magical heritage, makes new friends, including Hermione Granger and Ron Weasley, and learns about the mysterious and dangerous past of his family. As Harry navigates the enchanting yet perilous world of magic, he uncovers secrets about his own identity and the dark wizard who killed his parents, Lord Voldemort. The novel is a captivating blend of fantasy, adventure, and the universal themes of friendship, bravery, and self-discovery.', 14.99, '2024-05-30T16:24:00.024Z', 'Paper', 57, 33);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000007, '417.jpg', 'November 9', '2024-05-30T16:24:00.024Z', 290, 'The novel unfolds over the course of several years, with Fallon and Ben meeting each year on November 9th. Each meeting reveals more about their personal struggles and the evolution of their relationship. As their lives intertwine, they confront their pasts, their dreams, and the choices that have shaped their futures. November 9 delves into themes of healing, forgiveness, and the impact of love on our lives. Hoover’s evocative storytelling and deep character development create a compelling narrative that resonates with readers. The book offers a blend of romance and drama, capturing the complexities of relationships and the journey towards self-discovery.', 13.50, '2024-05-30T16:24:00.024Z', 'Paper', 28, 53);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000008, '418.jpg', 'Little Women', '2024-05-30T16:24:00.024Z', 420, 'The story chronicles the sisters journey from childhood to adulthood, highlighting their individual dreams, struggles, and personal growth. Through their experiences, Alcott weaves a rich tapestry of themes such as family bonds, love, ambition, and resilience. Each sister has her own distinct personality and aspirations, which adds depth and variety to the narrative. Little Women offers a heartfelt exploration of the values and dynamics of family life, as well as the societal expectations faced by women of that time. The novel is enduring appeal lies in its relatable characters, timeless themes, and the universal experiences of love, loss, and the pursuit of one s dreams.', 11.75, '2024-05-30T16:24:00.024Z', 'Paper', 43, 22);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (97800000009, '419.jpg', 'Harry Potter And The Order Of The Phoenix Vol 5', '2024-05-30T16:24:00.024Z', 480, 'Harry Potter and the Order of the Phoenix introduces readers to new characters, including the formidable Professor Dolores Umbridge, who becomes the new Defense Against the Dark Arts teacher and imposes harsh rules on Hogwarts. The novel explores themes of resistance, leadership, and the struggles of growing up, as Harry and his friends confront both external dangers and their personal challenges.', 15.25, '2024-05-30T16:24:00.024Z', 'Paper', 19, 96);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678901, '420.jpg', 'Mansfield Park', '2024-05-30T16:24:00.024Z', 401, 'The story centers on Fanny Price, a modest and reserved young woman who is sent to live with her wealthy relatives, the Bertrams, at Mansfield Park. As Fanny grows up among her affluent cousins, she faces the challenges of navigating the complexities of social expectations and personal values. The novel delves into her inner struggles and her moral dilemmas as she observes the behaviors and relationships of those around her, including the charming but morally ambiguous Henry Crawford.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 56, 25);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678902, '421.jpg', 'The Prince', '2024-05-30T16:24:00.024Z', 401, 'The book is presented as a guide for political leaders and aspiring rulers, outlining strategies for acquiring and maintaining political power. Machiavelli draws on historical examples and his own experiences to discuss topics such as political maneuvering, the use of force, the importance of adaptability, and the relationship between morality and political effectiveness.', 4.70, '2024-05-30T16:24:00.024Z', 'Paper', 56, 30);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678903, '422.jpg', '12 Rules For Life', '2024-05-30T16:24:00.024Z', 401, '12 Rules for Life is ideal for readers seeking practical advice on self-improvement and personal fulfillment. With its blend of psychology, philosophy, and real-world application, the book provides a roadmap for navigating life’s uncertainties and cultivating a life of meaning and purpose.', 23.00, '2024-05-30T16:24:00.024Z', 'Paper', 56, 35);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678904, '423.jpg', 'Pride And Prejudice', '2024-05-30T16:24:00.024Z', 401, 'The story revolves around Elizabeth Bennet, one of five sisters in the Bennet family, and her evolving relationship with the wealthy and aloof Mr. Darcy. As Elizabeth navigates the complexities of courtship, social expectations, and family dynamics, she encounters misunderstandings, prejudices, and personal growth.', 8.90, '2024-05-30T16:24:00.024Z', 'Paper', 56, 40);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678905, '424.jpg', 'Meditations', '2024-05-30T16:24:00.024Z', 401, 'Written in the form of personal reflections and philosophical musings, this collection of thoughts was never intended for publication but serves as a testament to Aurelius’s Stoic philosophy and his quest for personal virtue. The book is divided into twelve books, each containing a series of reflections on topics such as self-discipline, leadership, and the nature of the universe. Aurelius emphasizes the importance of resilience, rationality, and inner peace, drawing on Stoic principles to navigate the challenges and responsibilities of his role as emperor.', 3.80, '2024-05-30T16:24:00.024Z', 'Paper', 56, 45);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678906, '425.jpg', 'The Alchemist', '2024-05-30T16:24:00.024Z', 401, 'The Alchemist by Paulo Coelho is an inspirational and philosophical novel that has captivated readers worldwide since its publication in 1988. The story follows Santiago, a young Andalusian shepherd who dreams of discovering a hidden treasure located near the Egyptian pyramids. Motivated by his recurring dream and the belief that he is destined for something greater, Santiago embarks on a journey that leads him through the deserts of North Africa and deep into his own soul.', 2.70, '2024-05-30T16:24:00.024Z', 'Paper', 56, 50);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678907, '426.jpg', 'Fingerprint Activities', '2024-05-30T16:24:00.024Z', 401, 'Fingerprint Activities refer to a variety of engaging exercises and educational projects that use fingerprinting as a central theme. These activities are often used for educational purposes, including teaching about biology, art, or forensic science.', 12.70, '2024-05-30T16:24:00.024Z', 'Paper', 56, 55);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678908, '427.jpg', 'Emma', '2024-05-30T16:24:00.024Z', 401, 'Emma explores themes of social class, relationships, and personal growth. Austen’s sharp wit and keen observation provide a satirical look at the social dynamics of Regency England, while the novel’s engaging plot and well-drawn characters offer a delightful blend of romance and humor. With its memorable heroine and its exploration of the complexities of human nature, Emma remains one of Austen’s most celebrated works.', 7.00, '2024-05-30T16:24:00.024Z', 'Paper', 56, 60);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678909, '428.jpg', 'Peppa Pig Practise With Peppa', '2024-05-30T16:24:00.024Z', 401, '"Peppa Pig: Practise with Peppa" is an engaging and educational book designed for young children, featuring the beloved characters from the popular television series "Peppa Pig." This activity book is tailored to help children develop important early learning skills in a fun and interactive way.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 56, 65);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143127741, '429.jpg', 'Mindsight ', '2024-05-30T16:24:00.024Z', 256, 'In Mindsight, Dr. Siegel presents a compelling argument for how understanding and reshaping our mental processes can lead to profound personal transformation and emotional well-being. The book delves into the science behind how our brain functions and how our mental states impact our behavior, relationships, and overall quality of life. Through a combination of scientific research, practical exercises, and real-life examples, Dr. Siegel illustrates how mindsight can be cultivated to enhance self-awareness, improve interpersonal relationships, and promote psychological healing. The book provides tools and techniques for developing greater emotional intelligence, managing stress, and fostering resilience.', 18.79, '2024-05-30T16:24:00.024Z', 'Paper', 34, 15);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143136352, '430.jpg', 'Macbeth ', '2024-05-30T16:24:00.024Z', 300, 'The story begins with Macbeth’s encounter with the witches, who prophesy that he will become king. Driven by ambition and spurred on by Lady Macbeth, he murders King Duncan and seizes the throne. However, his ascent to power is marred by guilt and paranoia, leading to a series of increasingly violent and tragic actions. Macbeth’s reign becomes a descent into tyranny and madness, resulting in further bloodshed and his eventual downfall.', 8.45, '2024-05-30T16:24:00.024Z', 'Paper', 22, 22);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143039082, '431.jpg', 'North And South', '2024-05-30T16:24:00.024Z', 440, 'North and South by Elizabeth Gaskell is a classic novel first published in 1854. The story is set in the industrial town of Milton in northern England and contrasts the lives and values of the industrial North with the genteel South. The novel follows Margaret Hale, a strong-willed and compassionate young woman who moves from the rural South of England to the industrial North after her father leaves the Anglican Church. In Milton, Margaret encounters the harsh realities of industrial life and the stark differences between the working-class struggles and the genteel society she once knew.', 7.65, '2024-05-30T16:24:00.024Z', 'Paper', 47, 33);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143039222, '432.jpg', 'Letters To Milena ', '2024-05-30T16:24:00.024Z', 150, 'Letters to Milena is notable for its rich portrayal of Kafka’s inner world, his profound philosophical reflections, and his struggles with illness and self-doubt. The collection provides valuable context for understanding Kafka’s literary output and his psychological state during a turbulent period in his life. The letters are not only significant for their literary content but also for their insight into Kafka’s personal relationships and his enduring quest for meaning and connection.', 4.65, '2024-05-30T16:24:00.024Z', 'Paper', 15, 44);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143039413, '433.jpg', 'Wuthering Heights', '2024-05-30T16:24:00.024Z', 340, 'Wuthering Heights is celebrated for its innovative narrative techniques, its exploration of the darker sides of human nature, and its portrayal of intense emotional and psychological states. Brontë’s only novel, it remains a powerful and enduring work, captivating readers with its raw and evocative portrayal of love, obsession, and the supernatural.', 14.99, '2024-05-30T16:24:00.024Z', 'Paper', 9, 55);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143039536, '434.jpg', 'To Kill A Mockingbird ', '2024-05-30T16:24:00.024Z', 281, 'The story is narrated by Scout Finch, who reflects on her childhood experiences and her father s role as a moral beacon in their community. Her father, Atticus Finch, is a respected lawyer who is appointed to defend Tom Robinson, a Black man falsely accused of raping a white woman, Mayella Ewell. The trial and its aftermath expose deep-seated racism and prejudice in the community, challenging Atticus and his family in profound ways. Through Scout s perspective, To Kill a Mockingbird addresses complex issues such as social inequality, empathy, and the loss of innocence. The novel is renowned for its poignant portrayal of these themes and its memorable characters, including the honorable Atticus Finch, the resilient Scout, and the reclusive Boo Radley.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 67);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143039648, '435.jpg', 'Sapiens A Brief History Of Humankind', '2024-05-30T16:24:00.024Z', 466, 'A Brief History of Humankind by Yuval Noah Harari is a thought-provoking and expansive exploration of the history of the human species. Published in 2011, this best-selling book offers a sweeping overview of how Homo sapiens came to dominate the world, transforming from primitive hunter-gatherers into the complex, technologically advanced societies of today. Harari traces the journey of human evolution, examining major milestones such as the Cognitive Revolution, which allowed early humans to develop complex language and communication; the Agricultural Revolution, which led to the rise of civilizations and social hierarchies; and the Scientific Revolution, which fueled technological advancements and altered the course of history.', 4.50, '2024-05-30T16:24:00.024Z', 'Paper', 25, 78);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143039759, '436.jpg', 'Fingerprint Activities Under The Sea ', '2024-05-30T16:24:00.024Z', 32, 'Fingerprint Activities Under The Sea are creative and engaging exercises designed for children to explore ocean-themed art and learn about marine life through fingerprinting. These activities combine the fun of fingerprinting with educational elements about underwater creatures and ecosystems.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 40, 87);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143039865, '437.jpg', 'How To Win Friends And Influence People', '2024-05-30T16:24:00.024Z', 288, 'How to Win Friends and Influence People is a seminal self-help book first published in 1936. The book is renowned for its practical advice on interpersonal skills and its enduring impact on personal and professional relationships. In this classic work, Carnegie provides timeless principles for building positive relationships, effective communication, and influencing others in a constructive manner.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 14, 91);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143039974, '438.jpg', 'The Art Of Rhetoric', '2024-05-30T16:24:00.024Z', 221, 'The Art of Rhetoric remains a key reference for students, scholars, and practitioners of rhetoric and communication. Its principles are applicable not only in public speaking but also in written communication and various forms of persuasion. Aristotle’s insights into human psychology, argumentation, and effective communication continue to be relevant in contemporary discussions of rhetoric and discourse.', 8.40, '2024-05-30T16:24:00.024Z', 'Paper', 37, 96);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9780143040089, '439.jpg', 'The Godfather', '2024-05-30T16:24:00.024Z', 411, 'The Godfather is a classic crime novel that explores themes of power, loyalty, and corruption within the context of a powerful Mafia family. The story follows the Corleone family, led by patriarch Vito Corleone, as they navigate the complexities of organized crime, family dynamics, and the struggle for control and influence. Through its intricate plot and memorable characters, The Godfather delves into the moral and ethical ambiguities of power and justice.', 11.75, '2024-05-30T16:24:00.024Z', 'Paper', 21, 105);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (32345678901, '440.jpg', 'Fingerprint Activities Garden', '2024-05-30T16:24:00.024Z', 300, 'Fingerprint Activities Garden are creative and educational art projects designed for children to explore garden themes using fingerprinting techniques. These activities combine the fun of fingerprinting with learning about plants, flowers, and garden creatures.', 12.50, '2024-05-30T16:24:00.024Z', 'Paper', 30, 15);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (32345678902, '441.jpg', 'Diary Of A Wimpy Kid Rodrick Rules 2', '2024-05-30T16:24:00.024Z', 320, 'In this sequel, Greg s older brother, Rodrick Heffley, takes center stage. Rodrick is a self-absorbed and often irritating presence in Greg s life, and their relationship becomes a significant source of conflict and comedy.', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 35, 20);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (32345678903, '442.jpg', 'The Catcher In The Rye', '2024-05-30T16:24:00.024Z', 250, 'Throughout the book, Holden interacts with various people, including former teachers, old friends, and strangers, but struggles to connect with them on a meaningful level.', 18.00, '2024-05-30T16:24:00.024Z', 'Paper', 40, 25);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678904, '443.jpg', 'Ignite Me', '2024-05-30T16:24:00.024Z', 350, 'In Ignite Me, Juliette Ferrars is coming into her own power as she grapples with her role in a crumbling society and her complex relationships.', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 30);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678905, '444.jpg', 'Giraffes Cant Dance', '2024-05-30T16:24:00.024Z', 150, 'The book tells the story of Gerald the Giraffe, who, unlike the other animals in the jungle, struggles to dance.', 22.50, '2024-05-30T16:24:00.024Z', 'Paper', 50, 35);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (52345678906, '445.jpg', 'Great Expectations', '2024-05-30T16:24:00.024Z', 350, 'The story begins with young Pip living with his sister and her husband, Joe Gargery, a blacksmith. His life changes dramatically when he encounters an escaped convict named Magwitch and later meets the wealthy but eccentric Miss Havisham and her beautiful but cold-hearted ward, Estella. Despite his humble beginnings, Pip’s fortunes change when he learns he has come into a great fortune from an unknown benefactor and is given the opportunity to become a gentleman in London.', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 40, 20);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (52345678907, '446.jpg', 'Well Always Have Summer', '2024-05-30T16:24:00.024Z', 370, 'In We will Always Have Summer, Belly is preparing for her senior year of high school and is faced with the complexities of growing up and making crucial decisions about her future. As she reflects on her past summers and the love triangle between herself, Conrad Fisher, and Jeremiah Fisher, she must confront the realities of her relationships and her own evolving desires.', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 45, 25);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (22345678908, '447.jpg', 'The Silent Patient', '2024-05-30T16:24:00.024Z', 400, 'The story centers around Alicia Berenson, a successful painter who is accused of murdering her husband, Gabriel, and then subsequently stops speaking. Alicia’s silence turns her into a media sensation and leads her to be admitted to a secure psychiatric facility called The Grove. Her only form of communication is through her art, specifically a haunting self-portrait titled "Alcestis," which she completes before her silence.', 16.00, '2024-05-30T16:24:00.024Z', 'Paper', 50, 30);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (32345678909, '448.jpg', 'Lord Of The Flies', '2024-05-30T16:24:00.024Z', 312, 'Island after a plane crash. Initially, the boys attempt to establish their own form of order and create a society with rules and leadership. Ralph, one of the older boys, is elected as the leader, and he strives to maintain order and focus on rescue. However, as time passes, the boys initial sense of civilization begins to crumble, and their behavior becomes increasingly savage.', 18.00, '2024-05-30T16:24:00.024Z', 'Paper', 55, 35);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (32345678910, '449.jpg', 'The Power Of Now A Guide To Spiritual Enlightenment', '2024-05-30T16:24:00.024Z', 220, 'In this book, Tolle presents a compelling argument for the importance of living fully in the present moment. He explores how the mind’s tendency to dwell on the past or worry about the future creates unnecessary suffering and prevents individuals from experiencing true peace and fulfillment. By focusing on the present, Tolle argues that people can transcend the ego and discover a deeper sense of self that is not bound by time or external circumstances.', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 30, 40);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (32345678911, '450.jpg', 'Black Beauty', '2024-05-30T16:24:00.024Z', 400, 'The story is narrated by Black Beauty, a horse who recounts his life experiences from his early days as a colt through his various owners and experiences. Told from the perspective of the horse, the novel offers a poignant look at the treatment of animals in the 19th century, highlighting both the kindness and cruelty that animals can encounter.', 22.00, '2024-05-30T16:24:00.024Z', 'Paper', 35, 45);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (32345678912, '451.jpg', 'Beach Read', '2024-05-30T16:24:00.024Z', 350, 'The story follows two authors, January Anderson and Gus Everett, who are both facing creative blocks. January is a romance novelist reeling from her father’s death and a recent breakup, while Gus writes literary fiction and is struggling with his own personal and professional setbacks. When their paths cross, they find themselves in neighboring beach houses for the summer. To overcome their writer’s block, they strike a deal: they will swap genres and write each other’s books.', 24.00, '2024-05-30T16:24:00.024Z', 'Paper', 25, 50);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (32345678913, '452.jpg', 'Peppa Pig Wipe Clean Numbers Book', '2024-05-30T16:24:00.024Z', 100, 'Peppa Pig Wipe Clean Numbers Book is an engaging educational book designed for young children to practice their number-writing skills. Featuring the beloved characters from the popular Peppa Pig series, this book combines fun with learning in a way that captivates young readers. The book provides a series of wipe-clean pages that allow children to practice writing numbers multiple times using a dry-erase marker.', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 20, 55);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (42345678914, '453.jpg', '1984', '2024-05-30T16:24:00.024Z', 328, '1984 by George Orwell, first published in 1949, is a dystopian novel that remains a powerful and influential work in the realm of political and social commentary. Set in a totalitarian future where the state exercises absolute control over every aspect of life, the novel explores themes of surveillance, repression, and the manipulation of truth.', 25.00, '2024-05-30T16:24:00.024Z', 'Paper', 15, 60);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (42345678901, '454.jpg', 'Letters From A Stoic', '2024-05-30T16:24:00.024Z', 350, 'Letters from a Stoic by Seneca is a collection of philosophical letters written by the Roman Stoic philosopher Seneca to his friend Lucilius Junior. The letters, composed between 63 and 65 AD, offer timeless wisdom and practical advice on how to live a virtuous and fulfilling life.In this influential work, Seneca explores various aspects of Stoic philosophy, including the nature of happiness, the importance of self-control, and the value of wisdom. The letters cover a wide range of topics, from the fleeting nature of fame and wealth to the cultivation of inner peace and resilience in the face of adversity.', 12.50, '2024-05-30T16:24:00.024Z', 'Paper', 15, 5);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (42345678902, '455.jpg', 'Moby Dick', '2024-05-30T16:24:00.024Z', 635, 'Moby-Dick is renowned for its intricate narrative structure, rich symbolism, and detailed depiction of 19th-century whaling. Melville combines adventure, philosophical reflection, and social commentary to create a complex and multi-layered story. The novel explores themes such as humanity s struggle against nature, the limits of knowledge, and the consequences of revenge.The book is celebrated for its deep psychological insight, its innovative narrative techniques, and its exploration of existential questions.', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 23, 12);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (42345678903, '456.jpg', 'Brave New World', '2024-05-30T16:24:00.024Z', 311, 'Set in a world where humanity is engineered for uniformity and control, the novel introduces readers to a society where happiness and stability are achieved through the use of technology, conditioning, and the suppression of individuality. In this world, people are artificially created and conditioned from birth to fulfill predetermined roles, with emotions and desires controlled through the use of a drug called soma.The story follows Bernard Marx, an outcast in this seemingly perfect society, and John, a "savage" from a remote community who is brought into the World State. As Bernard and John confront the superficiality and moral emptiness of their world, the novel explores themes of freedom, conformity, and the cost of technological progress.', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 30, 25);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (42345678904, '457.jpg', 'The Invisible Man', '2024-05-30T16:24:00.024Z', 245, 'The story follows Griffin, a scientist who has discovered a formula for invisibility. As he tests the formula on himself, he becomes completely invisible but finds that he cannot reverse the process. The novel chronicles his descent into madness and criminality as he struggles with the isolation and societal rejection that come with his newfound invisibility.Griffin s attempts to remain hidden and his growing desperation lead him to commit increasingly violent acts. The novel explores the psychological and moral consequences of having absolute power without accountability. As Griffin becomes more unhinged, his actions set off a chain of events that ultimately culminates in tragedy.', 11.50, '2024-05-30T16:24:00.024Z', 'Paper', 40, 35);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (42345678905, '458.jpg', 'The Diary Of A Young Girl', '2024-05-30T16:24:00.024Z', 285, 'The Diary of a Young Girl, commonly known as "The Diary of Anne Frank", is a poignant and powerful account of a young Jewish girl s life during the Holocaust. Written by Anne Frank, the diary chronicles her experiences while hiding with her family and another Jewish family in Amsterdam from 1942 to 1944.In the diary, Anne Frank provides an intimate and moving portrayal of her daily life, thoughts, and emotions as she navigates the challenges of adolescence in hiding. Her writing reflects her hopes, fears, and dreams, as well as her growing awareness of the dangers and complexities of the world around her.', 13.00, '2024-05-30T16:24:00.024Z', 'Paper', 55, 45);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (42345678906, '459.jpg', 'Ikigai', '2024-05-30T16:24:00.024Z', 190, 'Drawing on insights from the people of Okinawa, a region known for its high number of centenarians, the authors investigate how the Japanese approach to life and work contributes to longevity and well-being. The book combines personal stories, cultural insights, and practical advice on how to discover and embrace one s own ikigai.', 16.00, '2024-05-30T16:24:00.024Z', 'Paper', 57, 55);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567001, '460.jpg', 'Surrounded By Idiots', '2024-05-30T16:24:00.024Z', 200, 'The book is based on the DISC model of personality, which categorizes human behavior into four main types: Dominant (Red), Inspiring (Yellow), Supportive (Green), and Cautious (Blue). Erikson uses these categories to explain how different people think, communicate, and respond to various situations.', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 34, 23);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567002, '461.jpg', 'Sons And Lovers', '2024-05-30T16:24:00.024Z', 250, 'The story centers on the Morel family, particularly the intense and often strained relationship between Paul and his mother, Gertrude. Gertrude s domineering nature and Paul s dependence on her significantly impact his romantic relationships and his struggle to assert his own identity.', 13.00, '2024-05-30T16:24:00.024Z', 'Paper', 40, 45);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567003, '462.jpg', 'Mindset: Changing The Way You Think To Fulfil Your Potential', '2024-05-30T16:24:00.024Z', 300, 'In this influential work, psychologist Carol S. Dweck introduces the idea of fixed and growth mindsets. A fixed mindset is the belief that abilities and intelligence are static and unchangeable, leading individuals to avoid challenges and give up easily. In contrast, a growth mindset is the belief that abilities can be developed through effort, learning, and perseverance.', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 22, 31);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567004, '463.png', 'Albanian Folktales And Legends', '2024-05-30T16:24:00.024Z', 350, 'The book includes a diverse array of folktales, myths, and legends, each with its unique characters, themes, and moral lessons. These stories often feature heroic figures, mythical creatures, and supernatural events, revealing the values, beliefs, and imagination of the Albanian people.', 17.00, '2024-05-30T16:24:00.024Z', 'Paper', 55, 62);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567005, '464.jpg', 'Plague', '2024-05-30T16:24:00.024Z', 400, 'As the plague spreads, the townspeople are forced into isolation and struggle to cope with the relentless and indiscriminate nature of the disease. The novel follows several characters, including Dr. Bernard Rieux, who becomes one of the central figures in the battle against the epidemic.', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 52, 76);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567006, '465.jpg', 'Educated', '2024-05-30T16:24:00.024Z', 275, 'In Educated, Westover details her unconventional upbringing, where formal education was eschewed in favor of working on her family’s farm and adhering to extreme religious beliefs. Despite the lack of formal schooling, Westover taught herself enough to gain admission to Brigham Young University.', 16.00, '2024-05-30T16:24:00.024Z', 'Paper', 19, 87);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567007, '466.jpg', 'Dracula', '2024-05-30T16:24:00.024Z', 340, 'The story unfolds through a series of journal entries, letters, and newspaper clippings, presenting a multifaceted narrative from various perspectives. The plot follows Jonathan Harker, a young lawyer who travels to Dracula s castle to assist with a real estate transaction, only to find himself trapped by the Count.', 18.00, '2024-05-30T16:24:00.024Z', 'Paper', 46, 12);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567008, '467.jpg', 'Man’s Search For Meaning', '2024-05-30T16:24:00.024Z', 230, 'The first part of the book recounts Frankl’s harrowing experiences in Nazi concentration camps, where he endured unimaginable suffering and loss. Through his observations and reflections, Frankl explores how individuals can find meaning and purpose even in the most extreme conditions.', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 29, 39);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567009, '468.jpg', 'Selected Fairy Tales', '2024-05-30T16:24:00.024Z', 180, 'Selected Fairy Tales offers readers a journey into the heart of storytelling, where magic and wonder abound. The tales are often accompanied by illustrations that enhance the enchanting experience, making this collection a delightful read for both children and adults.', 11.00, '2024-05-30T16:24:00.024Z', 'Paper', 37, 54);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567010, '469.jpg', 'The Iliad', '2024-05-30T16:24:00.024Z', 420, 'The poem is set during the Trojan War and focuses on the hero Achilles, exploring themes of glory, honor, and the human condition. The Iliad opens with the conflict between Achilles and Agamemnon, the Greek leader, which reflects the broader themes of pride and wrath that drive much of the narrative.', 21.00, '2024-05-30T16:24:00.024Z', 'Paper', 24, 68);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567011, '470.jpg', 'Persuasion', '2024-05-30T16:24:00.024Z', 275, 'Anne was once engaged to Frederick Wentworth, a dashing naval officer, but their engagement was broken off due to his lack of wealth and social status. Eight years later, Anne encounters Wentworth again, now a successful and wealthy man. As they navigate their renewed acquaintance, Anne grapples with her lingering feelings for Wentworth and the social pressures surrounding them.', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 41, 26);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567012, '471.jpg', 'A Tale Of Two Cities', '2024-05-30T16:24:00.024Z', 420, 'The novel centers on the lives of Charles Darnay, a French aristocrat who renounces his title and moves to England, and Sydney Carton, a dissolute English lawyer. The story is set against the backdrop of the French Revolution, highlighting themes of sacrifice, resurrection, and the impact of historical events on individuals.', 22.00, '2024-05-30T16:24:00.024Z', 'Paper', 48, 77);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567013, '472.jpg', 'The Picture Of Dorian Gray', '2024-05-30T16:24:00.024Z', 300, 'The novel follows the story of Dorian Gray, a young man whose portrait ages and deteriorates while he remains youthful and beautiful. As Dorian pursues a hedonistic lifestyle and makes increasingly immoral choices, the portrait becomes a reflection of his corrupted soul.', 19.00, '2024-05-30T16:24:00.024Z', 'Paper', 33, 16);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567014, '473.jpg', 'Great Expectations', '2024-05-30T16:24:00.024Z', 375, 'The novel follows Pip, an orphaned boy who is unexpectedly provided with a large fortune and the opportunity to become a gentleman. Throughout his journey, Pip grapples with issues of social class, ambition, and personal development, while uncovering the true nature of his benefactor and his own identity.', 16.00, '2024-05-30T16:24:00.024Z', 'Paper', 51, 67);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567015, '474.jpg', 'Crime And Punishment', '2024-05-30T16:24:00.024Z', 300, 'The novel follows Raskolnikov, a former student who becomes convinced that he is morally justified in committing murder to further his personal goals. The story delves into Raskolnikov s psychological turmoil, guilt, and eventual quest for redemption.', 18.00, '2024-05-30T16:24:00.024Z', 'Paper', 34, 80);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567004, '475.jpg', 'Sense And Sensibility', '2024-05-30T16:24:00.024Z', 401, 'After the death of their father, the Dashwood sisters face financial and social challenges that impact their prospects for marriage. Elinor, the elder sister, navigates her romantic entanglements with a sense of duty and propriety, while Marianne’s pursuit of passionate love leads her into turbulent relationships. As both sisters confront their personal trials and societal expectations, they learn valuable lessons about love, family, and personal growth.', 13.90, '2024-05-30T16:24:00.024Z', 'Paper', 43, 4);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567005, '476.jpg', 'The Myth Of Sisyphus', '2024-05-30T16:24:00.024Z', 159, 'In The Myth of Sisyphus, Camus explores themes of existentialism, the nature of human perseverance, and the philosophical responses to the absurd. The essay is renowned for its exploration of how individuals can confront and embrace the absurdity of existence with defiance and dignity.', 15.80, '2024-05-30T16:24:00.024Z', 'Paper', 33, 5);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567006, '477.jpg', 'Arabian Nights', '2024-05-30T16:24:00.024Z', 200, 'Notable stories within the collection include "Aladdin and the Magic Lamp," "Ali Baba and the Forty Thieves," and "Sinbad the Sailor." Arabian Nights is celebrated for its imaginative storytelling, its influence on Western literature and culture, and its exploration of themes such as justice, fate, and human nature.', 18.60, '2024-05-30T16:24:00.024Z', 'Paper', 22, 6);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567007, '478.jpg', 'It Ends With Us', '2024-05-30T16:24:00.024Z', 410, 'Lily meets and falls in love with Ryle Kincaid, a neurosurgeon with a troubled past of his own. As their relationship develops, Lily finds herself facing challenges she had hoped to avoid. The novel delves into the intricacies of their relationship, exploring themes of trust, forgiveness, and the impact of past experiences on present choices.', 16.40, '2024-05-30T16:24:00.024Z', 'Paper', 51, 7);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567008, '479.jpg', 'The Origin Of Species', '2024-05-30T16:24:00.024Z', 501, 'In On the Origin of Species, Darwin presents evidence and arguments supporting the idea that species evolve over time through a process of natural selection. He explains how traits that enhance survival and reproduction become more common in successive generations, leading to the gradual adaptation of species to their environments.', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 42, 8);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567009, '480.jpg', 'Selected Stories', '2024-05-30T16:24:00.024Z', 320, 'Selected Stories provides a comprehensive overview of the author’s most celebrated and impactful works, making it an excellent introduction for new readers and a valuable addition to the collections of long-time fans. Whether exploring themes of human nature, love, adventure, or the complexities of life, the stories in this volume reflect the depth and creativity of the author’s storytelling.', 22.50, '2024-05-30T16:24:00.024Z', 'Paper', 57, 9);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567890, '481.png', 'Tender Is The Night', '2024-05-30T16:24:00.024Z', 250, 'The story centers on Dick Diver, a charming and talented psychiatrist, and his wife, Nicole, who suffers from mental illness. Their seemingly idyllic life is centered around their luxurious lifestyle and social circles, but beneath the surface, their relationship faces mounting strains. The novel delves into the complexities of their marriage, as well as the relationships they form with other characters in their social milieu.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 10, 50);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567891, '482.jpg', 'Diary Of A Wimpy Kid Wrecking Ball', '2024-05-30T16:24:00.024Z', 250, 'In Wrecking Ball, Greg and his family are excited to renovate their home, but their plans quickly spiral into chaos. As they begin to make improvements, a series of mishaps and unexpected challenges arise, leading to a series of comedic situations and misadventures. From dealing with construction disasters to family conflicts, Greg’s attempts to manage the chaos provide plenty of laughs and insight into the trials of growing up.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 25, 60);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567892, '483.jpg', 'The Inferno', '2024-05-30T16:24:00.024Z', 250, 'In The Inferno, Dante embarks on a journey through Hell, guided by the Roman poet Virgil. The poem is structured as an allegory of the soul’s journey towards God, with Hell depicted as a series of concentric circles, each reserved for different types of sinners. The narrative explores themes of justice, morality, and redemption as Dante encounters various historical and mythical figures who suffer in accordance with their earthly sins.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 30, 70);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567893, '484.jpg', 'A Promised Land', '2024-05-30T16:24:00.024Z', 250, 'In A Promised Land, Obama reflects on his journey from his grassroots beginnings in Chicago to the White House. He discusses his campaign for the presidency, the challenges of his administration, and the significant legislative and policy achievements during his first term, including the Affordable Care Act. The memoir delves into the complexities of leadership, the intricacies of political decision-making, and the personal sacrifices involved in public service.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 40, 80);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567894, '485.jpg', 'Bosnia A Short History', '2024-05-30T16:24:00.024Z', 250, 'Bosnia: A Short History is praised for its accessible yet scholarly approach, making it a valuable resource for readers seeking to understand the historical context behind the modern political and social issues in Bosnia. Malcolm’s analysis provides a clear and nuanced perspective on the region’s complex history, offering important context for contemporary events.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 50, 90);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567895, '486.jpg', 'The Picture Of Dorian Gray', '2024-05-30T16:24:00.024Z', 250, 'As Dorian pursues a life of indulgence and moral corruption, the portrait becomes a repository of his sins and the visible mark of his internal degradation. The novel explores themes of vanity, moral decay, and the consequences of living a life devoid of ethical responsibility. Through Dorian’s descent into debauchery and the eventual confrontation with his own monstrous image, Wilde critiques the superficial values of society and the pursuit of aesthetic pleasure at the expense of integrity.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 55, 100);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567896, '487.jpg', 'Investigations Of A Dog', '2024-05-30T16:24:00.024Z', 250, 'Investigations of a Dog is noted for its exploration of philosophical questions through the lens of a seemingly simple story. Kafka’s unique narrative style and his ability to infuse mundane observations with deep existential significance make this work a notable example of his literary genius.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 35, 95);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567897, '488.jpg', 'Surrounded By Psychopaths', '2024-05-30T16:24:00.024Z', 250, 'The book categorizes different types of psychopaths and their behaviors, offering practical advice on how to identify and protect oneself from being manipulated or exploited. Erikson draws on real-life examples and psychological research to explain how psychopathy manifests in various relationships, including personal, professional, and social contexts.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 45, 85);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567898, '489.jpg', 'Treasure Island', '2024-05-30T16:24:00.024Z', 250, 'Treasure Island is renowned for its compelling narrative and its influence on the portrayal of pirates in literature and popular culture. With its iconic imagery of treasure maps, pirate ships, and swashbuckling adventure, the novel continues to captivate readers of all ages.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 50, 90);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567899, '490.jpg', 'The 33 Strategies Of War', '2024-05-30T16:24:00.024Z', 250, 'The 33 Strategies of War is renowned for its detailed exploration of strategic thinking and its application to overcoming challenges, achieving goals, and navigating complex situations. The book appeals to readers interested in history, leadership, and personal development, offering timeless lessons on the art of strategy and conflict management.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 20, 75);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567900, '491.jpg', 'The Age Of Innocence', '2024-05-30T16:24:00.024Z', 250, 'The Age of Innocence is acclaimed for its sharp social commentary, rich character development, and detailed portrayal of New York’s high society. The novel won the Pulitzer Prize for Fiction in 1921 and remains a significant work in American literature for its critique of social conventions and its exploration of the human condition.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 30, 80);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567901, '492.jpg', 'Death On The Nile', '2024-05-30T16:24:00.024Z', 250, 'In Death on the Nile, Poirot is vacationing in Egypt and is drawn into a murder investigation involving a wealthy heiress and her new husband. The story unfolds with multiple suspects and motives, leading to a dramatic and unexpected resolution. Christie’s skillful plotting and use of misdirection keep readers engaged until the final reveal.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 20, 70);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (9781234567902, '493.jpg', 'Redwall', '2024-05-30T16:24:00.024Z', 250, 'Redwall tells the story of the inhabitants of Redwall Abbey, a peaceful community of animals who face the threat of an evil rat warlord and his army. The novel combines elements of adventure, fantasy, and heroism, with richly detailed characters and settings that create an immersive world for readers. Brian Jacques’s storytelling emphasizes themes of bravery, friendship, and the battle between good and evil.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 15, 65);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567890, '494.jpg', 'The Phantom Of The Opera', '2024-05-30T16:24:00.024Z', 250, 'The Phantom of the Opera is celebrated for its atmospheric setting, dramatic tension, and exploration of themes like love, isolation, and madness. The novel has inspired numerous adaptations, including films, stage productions, and Andrew Lloyd Webber’s famous musical, solidifying its place as a timeless tale of beauty, terror, and unrequited love.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 15, 27);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567891, '495.jpg', 'Piers Of The Homeless Night', '2024-05-30T16:24:00.024Z', 250, 'The book is set in 1955 and follows Kerouac as he navigates the streets of San Francisco, homeless and aimless, seeking meaning and understanding in his surroundings. It captures his interactions with other drifters, his thoughts on life, and his sense of spiritual yearning. Written in Kerouac’s signature poetic prose, Piers of the Homeless Night reveals his vulnerability and internal struggles as he reflects on themes of solitude, displacement, and the search for enlightenment.', 10.00, '2024-05-30T16:24:00.024Z', 'Paper', 32, 42);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567892, '496.jpg', 'Pinocchio', '2024-05-30T16:24:00.024Z', 250, 'Pinocchio embarks on a series of adventures and misadventures, learning important life lessons along the way. His character flaws, such as lying (which famously causes his nose to grow) and impulsiveness, often get him into trouble. However, with the help of the Blue Fairy and his conscience, Jiminy Cricket, Pinocchio gradually learns the value of honesty, hard work, and compassion.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 24, 55);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567893, '497.jpg', 'Dare To Lead', '2024-05-30T16:24:00.024Z', 250, '"Dare to Lead" is celebrated for its blend of personal stories, research-based insights, and real-world applications. It encourages readers to embrace their imperfections, engage in difficult conversations, and lead with their hearts—transforming not just their workplaces but their entire approach to leadership.', 8.99, '2024-05-30T16:24:00.024Z', 'Paper', 21, 37);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567894, '498.jpg', 'Where The Crawdads Sing', '2024-05-30T16:24:00.024Z', 250, 'The novel alternates between two timelines—Kya’s youth in the 1950s and a murder investigation in the 1960s, when the body of a local man, Chase Andrews, is found in the swamp. As suspicion falls on Kya, the narrative explores themes of loneliness, survival, love, and prejudice. The intricate relationship between Kya and the natural environment serves as a powerful backdrop to her journey of self-discovery.', 7.49, '2024-05-30T16:24:00.024Z', 'Paper', 45, 29);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567895, '499.jpg', 'Lady Chatterley S Lover', '2024-05-30T16:24:00.024Z', 250, 'The novel delves deeply into Connie’s internal struggles as she grapples with her desires, societal expectations, and the growing distance between her and Sir Clifford. At its core, "Lady Chatterley s Lover" is a tale about physical and emotional fulfillment, challenging the rigid class structures and moral constraints of its time.', 9.29, '2024-05-30T16:24:00.024Z', 'Paper', 19, 64);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567896, '501.jpg', 'Kafka On The Shore', '2024-05-30T16:24:00.024Z', 250, 'The first protagonist is Kafka Tamura, a 15-year-old runaway who escapes his home to avoid a dark prophecy foretold by his father. The second protagonist is Nakata, an elderly man with a mysterious ability to communicate with cats but who suffers from a mental handicap due to a childhood accident.', 12.50, '2024-05-30T16:24:00.024Z', 'Paper', 52, 48);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567897, '500.jpg', 'Madame Bovary', '2024-05-30T16:24:00.024Z', 250, '"Madame Bovary" is considered one of the greatest works of literary realism, praised for its psychological depth, masterful narrative structure, and its unflinching portrayal of human folly and disillusionment. The novel’s exploration of themes like materialism, the dangers of romanticism, and the conflict between personal desires and societal constraints continues to resonate with readers today.', 11.95, '2024-05-30T16:24:00.024Z', 'Paper', 43, 56);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567898, '502.jpg', 'Stillness Is The Key', '2024-05-30T16:24:00.024Z', 250, '"Stillness Is the Key", published in 2019, is a thoughtful and practical guide by Ryan Holiday that explores the power of achieving inner peace and focus in the modern world. Drawing from ancient philosophies like Stoicism, Buddhism, and Taoism, as well as insights from great thinkers, artists, and athletes, Holiday argues that stillness—mental clarity and calm—is essential to a fulfilling and successful life.', 13.99, '2024-05-30T16:24:00.024Z', 'Paper', 37, 65);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567899, '503.jpg', 'Adventures Of Sherlock Holmes', '2024-05-30T16:24:00.024Z', 250, '"The Adventures of Sherlock Holmes" is celebrated for its captivating plots, vivid characters, and the enduring figure of Sherlock Holmes, who remains one of the most beloved detectives in literary history. The stories continue to inspire readers and have been adapted into numerous films, television shows, and other media.', 5.99, '2024-05-30T16:24:00.024Z', 'Paper', 12, 21);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567900, '504.jpg', 'Everything I Know About Love', '2024-05-30T16:24:00.024Z', 250, 'The book offers a candid and witty account of Alderton’s journey through love, heartbreak, and the pursuit of happiness. From the joys and challenges of dating to the importance of female friendships and the search for personal fulfillment, "Everything I Know About Love" resonates with readers through its relatable anecdotes and heartfelt insights.', 7.89, '2024-05-30T16:24:00.024Z', 'Paper', 28, 93);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES(9781234567901, '505.jpg', 'Concise Laws Of Human Nature', '2024-05-30T16:24:00.024Z', 250, 'The book outlines key principles governing human nature, including the impact of social influence, the complexities of emotional intelligence, and the ways in which people interact with and affect one another. "The Concise Laws of Human Nature" offers practical wisdom for navigating personal and professional relationships, enhancing communication, and fostering better understanding of oneself and others.', 9.49, '2024-05-30T16:24:00.024Z', 'Paper', 56, 77);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123456789012, '506.jpg', 'Concise Art Of Seduction', '2024-05-30T16:24:00.024Z', 301, '"The Concise Art of Seduction" offers readers a strategic approach to navigating social interactions and romantic pursuits. Greene’s clear and engaging writing provides valuable lessons on human behavior and the dynamics of attraction, making it a practical guide for those interested in improving their interpersonal skills.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 12, 25);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123456789013, '507.jpg', 'The Beautiful And Damned', '2024-05-30T16:24:00.024Z', 315, '"The Beautiful and Damned" is noted for its sharp critique of the American upper class and its vivid portrayal of the era’s hedonism and moral ambiguity. Fitzgerald’s keen observations and lyrical prose provide a poignant commentary on the cost of materialism and the emptiness that can accompany wealth and privilege.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 15, 30);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123456789014, '508.jpg', 'Seven Husbands Of Evelyn Hugo', '2024-05-30T16:24:00.024Z', 330, '"The Seven Husbands of Evelyn Hugo" explores themes of identity, power, and the pursuit of happiness, while also addressing broader social issues such as gender and LGBTQ+ representation. Reid’s richly detailed narrative and well-developed characters create a poignant and immersive reading experience that examines the cost of living a life in the spotlight.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 23, 35);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123456789015, '509.jpg', 'My Mermicorn Colouring Book', '2024-05-30T16:24:00.024Z', 340, '"My Mermicorn Colouring Book" is a delightful and imaginative colouring book designed for children and those who are young at heart. This enchanting book features a collection of whimsical illustrations blending the magical world of mermaids and unicorns—creating a captivating "mermicorn" theme.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 34, 40);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123456789016, '510.jpg', 'All We Need Is Love', '2024-05-30T16:24:00.024Z', 355, 'The book is a celebration of love in all its forms—romantic, platonic, and self-love—drawing from Lennon’s own experiences and his deep belief in the importance of compassion and understanding. "All We Need Is Love" offers readers an inspiring and thought-provoking perspective on how love can shape our lives and communities.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 45, 50);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123456789017, '511.jpg', 'Anyone Can Be My Friend', '2024-05-30T16:24:00.024Z', 370, 'Through relatable anecdotes and engaging illustrations, "Anyone Can Be My Friend" emphasizes the power of reaching out to others, accepting differences, and fostering a sense of community. It provides valuable insights into the art of making friends, being a good friend, and navigating the complexities of social interactions with compassion and understanding.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 56, 55);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123456789018, '512.jpg', 'They Both Die At The End', '2024-05-30T16:24:00.024Z', 385, '"They Both Die at the End" is a beautifully written exploration of how individuals can find meaning and significance in the face of inevitable loss. Silvera’s narrative delves into the characters’ emotional struggles and celebrates the power of human connection and the impact of living fully, even in the shadow of death.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 23, 60);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (123456789019, '513.jpg', 'Surrounded Bad Bosses', '2024-05-30T16:24:00.024Z', 400, '"Surrounded by Bad Bosses and Lazy Employees" is designed for anyone facing workplace challenges, from employees and managers to HR professionals. It equips readers with the skills to handle difficult situations with confidence, enhance their work relationships, and ultimately contribute to a healthier and more effective work environment.', 6.79, '2024-05-30T16:24:00.024Z', 'Paper', 12, 65);


INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (12355463, '.514.jpg', 'Everything Is F*cked', '2024-05-30T16:24:00.024Z', 300, 'Through a combination of humor, personal anecdotes, and philosophical reflections, "Everything Is F*cked" challenges readers to rethink their perceptions of happiness, fulfillment, and success. Manson’s candid and irreverent style encourages readers to confront their own beliefs and assumptions, ultimately guiding them toward a more resilient and hopeful outlook on life.', 12.00, '2024-05-30T16:24:00.024Z', 'Paper', 10, 1);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (612355464, '515.jpg', 'The Forty Rules Of Love', '2024-05-30T16:24:00.024Z', 320, 'The historical narrative brings to life the profound relationship between Rumi and Shams, showcasing their journey of spiritual enlightenment and the deep, transformative power of love. The forty rules referred to in the book are derived from Shams’ teachings, providing philosophical insights and wisdom that resonate throughout both narratives.', 13.00, '2024-05-30T16:24:00.024Z', 'Paper', 11, 2);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (712355465, '516.jpg', 'Demon Slayer', '2024-05-30T16:24:00.024Z', 340, '"Demon Slayer" combines intense action sequences with emotional depth, exploring themes of family, courage, and the struggle between good and evil. The series is renowned for its dynamic fight scenes, intricate world-building, and the development of its richly drawn characters. Its blend of traditional Japanese folklore with original fantasy elements has made it a beloved addition to the manga and anime genres.', 14.00, '2024-05-30T16:24:00.024Z', 'Paper', 12, 3);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (812355466, '517.jpg', 'Heartless', '2024-05-30T16:24:00.024Z', 360, 'The story follows Catherine Pinkerton, a young woman who dreams of becoming a renowned baker rather than taking on the responsibilities of royalty. Despite her passion for baking and her desire to open her own bakery, Catherine’s life takes a drastic turn when she meets the mysterious and charismatic Joker. Their relationship becomes the catalyst for her transformation into the tyrannical Queen of Hearts.', 15.00, '2024-05-30T16:24:00.024Z', 'Paper', 13, 4);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (912355467, '518.jpg', 'Wonder', '2024-05-30T16:24:00.024Z', 380, 'The story is told from multiple perspectives, including Auggie’s family, friends, and classmates, providing a rich and nuanced view of how Auggie’s condition affects those around him. Through these diverse viewpoints, "Wonder" explores themes of kindness, empathy, and the impact of bullying, while also celebrating the strength of the human spirit.', 16.00, '2024-05-30T16:24:00.024Z', 'Paper', 14, 5);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (312355468, '519.jpg', 'Find Me', '2024-05-30T16:24:00.024Z', 400, '"Find Me" delves into themes of love, longing, and the passage of time, capturing the complexities of human relationships and the ways in which memories and emotions shape our lives. Aciman’s lyrical prose and deep emotional insight create a rich and immersive reading experience, offering readers a chance to revisit beloved characters and witness the unfolding of their lives with both nostalgia and hope.', 17.00, '2024-05-30T16:24:00.024Z', 'Paper', 15, 6);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (212355469, '520.jpg', 'The Odyssey', '2024-05-30T16:24:00.024Z', 420, '"The Odyssey" explores themes of heroism, loyalty, cunning, and the longing for home. Odysseus’s journey is not just a physical voyage but also a quest for personal growth and redemption. The poem’s rich storytelling, intricate characters, and timeless themes have made it a cornerstone of Western literature and a profound reflection on the human condition.', 18.00, '2024-05-30T16:24:00.024Z', 'Paper', 16, 7);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (412355470, '521.jpg', 'The Meek One', '2024-05-30T16:24:00.024Z', 440, '"The Meek One" by Fyodor Dostoevsky is a short story that explores themes of power, vulnerability, and the complexities of human relationships. The narrative centers on a troubled and introspective man who recounts his tumultuous relationship with his wife, a young woman he refers to as the meek one. The story is told through the perspective of the husband, who is a deeply flawed character grappling with his own insecurities and failures. He reveals his emotional struggles and the impact of his actions on his wife, who endures his harshness and manipulation with quiet dignity. As the story unfolds, it becomes clear that the meek one’s silence and passivity mask profound inner strength and suffering.', 19.00, '2024-05-30T16:24:00.024Z', 'Paper', 17, 8);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (332355471, '522.jpg', 'Look Inside Your Body', '2024-05-30T16:24:00.024Z', 460, 'The book provides an accessible and visually appealing overview of various bodily systems, including the skeletal, muscular, digestive, and respiratory systems. Each section is carefully designed to explain complex concepts in a way that is easy for children to understand, using simple language and engaging visuals. Interactive flaps and pop-ups encourage readers to explore the content more deeply, making learning about anatomy both fun and educational.', 20.00, '2024-05-30T16:24:00.024Z', 'Paper', 18, 9);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (412355472, '523.jpg', 'Mastery', '2024-05-30T16:24:00.024Z', 480, '"Mastery" by Robert Greene is a compelling exploration of the principles and practices that lead to achieving excellence in any field. Drawing on historical and contemporary examples, Greene outlines a roadmap for mastering a craft or profession through dedication, skill development, and strategic thinking.', 21.00, '2024-05-30T16:24:00.024Z', 'Paper', 19, 10);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (512355473, '524.jpg', 'One Hundred Years Of Solitude', '2024-05-30T16:24:00.024Z', 500, '"One Hundred Years of Solitude" is celebrated for its inventive narrative techniques and its profound exploration of themes such as love, power, and isolation. Márquez’s masterful storytelling and rich characterizations create an epic that is both a universal tale and a reflection of the Latin American experience.', 22.00, '2024-05-30T16:24:00.024Z', 'Paper', 20, 11);

INSERT INTO Books (ISBN, image, Title, PublicationDate, PageNumber, Description, Price, DateOfadition, Type, PublishingHouseId, StockId) VALUES (172355474, '525.jpg', 'Northanger Abbey', '2024-05-30T16:24:00.024Z', 520, '"Northanger Abbey" by Jane Austen is a witty and satirical novel that explores themes of romance, social class, and the power of imagination. The story follows Catherine Morland, a young woman with a passion for Gothic novels, who finds herself entangled in a series of adventures that blur the line between fiction and reality. Through its clever narrative and engaging characters, the novel offers a commentary on the expectations and limitations placed on women in the early 19th century.', 23.00, '2024-05-30T16:24:00.024Z', 'Paper', 21, 12);








	 
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (2,1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (3,7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (4,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (5,2 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (6,3 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (7,4 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (8,5 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (9,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (10,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (11,7 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (12,7 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (13,7 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (14,8 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (15,25 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (16,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (17,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (18,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (19,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (20,12 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (21,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (22,8 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (23,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (24,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (25,14 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (26,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (27,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (28,25 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (29,14 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (30,5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (31,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (32,11 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (33,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (34,8 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (35,8 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (36,17 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (37,18 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (38,18 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (39,18 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (40,5 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (41,2 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (42,5 );

INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (43,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (44,12 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (45,9 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (46,9 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (47,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (48,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (49,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (50,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (51,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (52,9 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (53,9 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (54,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (55,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (56,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (57,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (58,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (59,20 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (60,20 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (61,23 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (62,23 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (63,3 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (64,3 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (65,12 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (66,12 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (67,2 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (68,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (69,2 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (70, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (71,19 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (72,17 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (73,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (74,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (75,14 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (76,15 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (77,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (78,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (79,25 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (80,9 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (81,5 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (82,25 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (83,25 );



INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (84,14 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (85,14 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (86,7 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (87,7 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (88,13 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (89,21 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (90,22 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (91,22 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (92,2 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (93,12 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (94,15 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (95,24);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (96,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (97,24 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (98,25 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (99,24);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (100,25 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (101,17 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (102,9 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (103,5 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (104,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (105,11 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (106,14 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (107,15 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (108,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (109,13 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (110,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (111,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (112,9 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (113,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (114,11 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (115,10 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (116,12 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (117,20 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (118,7 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (119,7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (120,17 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (121,13 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (122,2 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (123,2 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (124, 17);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (125,7 );

INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (126,6 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (127,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (128,11 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (129,11 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (130,15 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (131,1 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (132,9 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (133,12 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (134,12 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (135,20 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (136, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (137, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (138, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (139, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (140, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (141, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (142, 14);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (143, 14);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (144, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (145, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (146, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (147, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (148, 17);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (149, 11);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (150, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (151, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (152, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (153, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (154, 13);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (155, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (156, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (157, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (158, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (159, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (160, 12);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (161, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (162, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (163, 22);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (164, 22);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (165, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (166, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (167, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (168, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (169, 9);



INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (170, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (171, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (172, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (173, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (174, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (175, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (176, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (177, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (178, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (179, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (180, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (181, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (182, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (183, 12);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (184, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (185, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (186, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (187, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (188, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (189, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (190, 11);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (191, 14);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (192, 15);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (193, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (194, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (195, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (196, 13);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (197, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (198, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (199, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (200, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (201, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (202, 13);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (203, 13);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (204, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (205, 11);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (206, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (207, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (208, 20);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (209, 20);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (210, 15);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (211, 11);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (212, 16);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (213, 16);


INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (214,20 );
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (215, 20);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (216, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (217, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (218, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (219, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (220, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (221, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (222, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (223, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (224, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (225, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (226, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (227, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (228, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (229, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (230, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (231, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (232, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (233, 11);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (234, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (235, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (236, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (237, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (238, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (239, 17);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (240, 17);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (241, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (242, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (243, 17);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (244, 12);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (245, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (246, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (247, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (248, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (249, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (250, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (251, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (252, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (253, 21);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (254, 21);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (255, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (256, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (257, 15);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (258, 15);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (259, 20);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (260, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (261, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (262, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (263, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (264, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (265, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (266, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (267, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (268, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (269, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (270, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (271, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (272, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (273, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (274, 11);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (275, 11);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (276, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (277, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (278, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (279, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (280, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (281, 14);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (282, 14);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (283, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (284, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (285, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (286, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (287, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (288, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (289, 18);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (290, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (291, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (292, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (293, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (294, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (295, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (296, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (297, 5);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (298, 13);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (299, 21);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (300, 21);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (301, 22);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (302, 22);

INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (303, 1);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (304, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (305, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (306, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (307, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (308, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (309, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (310, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (311, 14);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (312, 14);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (313, 19);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (314, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (315, 23);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (316, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (317, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (318, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (319, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (320, 6);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (321, 13);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (322, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (323, 8);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (324, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (325, 10);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (326, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (327, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (328, 9);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (329, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (330, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (331, 22);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (332, 25);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (333, 25);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (334, 13);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (335, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (336, 13);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (337, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (338, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (339, 2);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (340, 4);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (341, 14);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (342, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (343, 7);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (344, 3);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (345, 2);

---------------------------------shtoni per librat anglisht ----------------------------------------------------

INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (347, 26);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (348, 27);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (349, 28);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (350, 29);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (351, 30);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (353, 32);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (354, 33);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (355, 34);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (356, 35);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (357, 36);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (358, 37);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (359, 38);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (360, 39);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (361, 40);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (362, 41);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (363, 42);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (364, 43);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (365, 44);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (366, 45);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (367, 46);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (368, 47);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (369, 48);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (370, 49);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (371, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (372, 45);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (373, 33);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (374, 48);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (375, 28);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (376, 30);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (377, 26);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (378, 47);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (379, 29);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (380, 34);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (381, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (382, 40);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (383, 27);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (384, 44);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (385, 32);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (386, 31);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (387, 46);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (388, 35);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (389, 41);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (390, 37);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (391, 28);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (392, 26);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (393, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (394, 32);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (395, 45);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (396, 29);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (397, 38);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (389, 30);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (400, 47);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (401, 31);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (402, 49);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (403, 36);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (404, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (405, 27);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (406, 41);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (407, 43);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (408, 26);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (409, 48);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (410, 37);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (411, 34);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (412, 39);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (413, 44);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (414, 27);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (415, 33);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (416, 46);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (417, 35);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (418, 29);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (420, 49);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (421, 30);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (422, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (423, 28);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (424, 47);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (425, 39);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (426, 34);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (427, 31);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (428, 32);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (429, 38);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (430, 27);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (431, 40);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (432, 29);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (433, 48);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (434, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (435, 26);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (436, 47);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (437, 43);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (438, 35);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (439, 41);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (440, 36);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (441, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (442, 28);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (443, 29);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (444, 32);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (445, 44);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (446, 39);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (447, 26);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (448, 30);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (449, 27);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (450, 46);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (451, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (452, 29);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (453, 30);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (454, 47);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (455, 33);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (456, 28);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (457, 39);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (458, 42);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (459, 27);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (460, 45);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (461, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (462, 30);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (463, 34);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (464, 29);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (465, 47);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (466, 31);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (467, 38);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (468, 50);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (469, 40);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (470, 26);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (471, 45);
INSERT INTO CategoryBooks(BookID, CategoryID) VALUES (419, 35);


--authors

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Steve Parker', '1952-07-19', 'Steve Parker is a prolific author and editor of childrens books on natural history, biology, and the environment. His work often includes detailed information and illustrations designed to educate young readers about the natural world.', 'N/A', 'Childrens Literature');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Aesop', '620 BC', 'Aesop was a Greek fabulist and storyteller credited with a number of fables now collectively known as Aesops Fables. His works have been translated into many languages and remain popular to this day.', 'N/A', 'Fables');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('David McCullough', '1933-07-07', 'David McCullough is an American author, narrator, and historian. He has won two Pulitzer Prizes and is known for his detailed and well-researched historical works.', 'Pulitzer Prize', 'History');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Matei Călinescu', '1934-06-15', 'Matei Călinescu was a Romanian literary critic, essayist, and professor of comparative literature. He is best known for his work on modernity and postmodernity in literature.', 'N/A', 'Literary Criticism');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Umberto Eco', '1932-01-05', 'Umberto Eco was an Italian novelist, literary critic, philosopher, and semiotician. He is best known for his novel The Name of the Rose and his work in aesthetics and semiotics.', 'Strega Prize', 'Philosophy and Aesthetics');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Adolf Hitler', '1889-04-20', 'Adolf Hitler was a German politician and leader of the Nazi Party. He rose to power as Chancellor of Germany in 1933 and later Führer in 1934. His book Mein Kampf (My Struggle) outlines his political ideology and future plans for Germany.', 'N/A', 'Political Ideology');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Edmund Conway', '1977-01-21', 'Edmund Conway is an economics editor and journalist. He has worked for various publications and is known for his accessible explanations of complex economic ideas.', 'N/A', 'Economics');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Libri Universitar', 'UnKnown', 'Libri Universitar is a publication house known for its educational materials, particularly in the fields of business, finance, and accounting.', 'N/A', 'Educational');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Various Authors', 'UnKnown', 'This book is a collaborative effort by multiple authors who specialize in educating young readers about the worlds greatest inventions.', 'N/A', 'Childrens Education');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Various Authors', 'UnKnown', 'This childrens encyclopedia was created by a team of educators and subject matter experts, covering a wide range of topics from A to Z.', 'N/A', 'Childrens Education');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('National Geographic Society', '1888-01-27', 'The National Geographic Society is a global nonprofit organization committed to exploring and protecting our planet. They produce highly regarded educational resources including atlases and other geographical content.', 'N/A', 'Geography');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Kurt Vonnegut', '1922-11-11', 'Kurt Vonnegut was an American writer known for his satirical novels. His works blend social commentary, science fiction, and humor, often focusing on the absurdity of the human condition.', 'N/A', 'Fiction');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Sophia Loren', '1934-09-20', 'Sophia Loren is an Italian actress and singer who rose to fame in the 1950s. Her autobiography, Dje Sot Neser recounts her life journey from a humble upbringing to international stardom.', 'Academy Award', 'Autobiography');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Eduard Dervishi', 'UnKnown', 'Eduard Dervishi is a prominent Albanian writer and historian known for his work on the socio-political changes in Albania during the late 20th century.', 'N/A', 'History');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Ridvan Berisha', 'UnKnown', 'Ridvan Berisha is an Albanian sports journalist and author. He has written extensively about the history of Albanian football.', 'N/A', 'Sports History');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Dritan Shakohoxha', 'UnKnown', 'Dritan Shakohoxha is a well-known Albanian sports commentator and author. His work focuses on the careers of Albanian football players around the world.', 'N/A', 'Sports Biography');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Shkëlqim Sinanaj', 'UnKnown', 'Shkëlqim Sinanaj is a sports writer and historian who has authored several books on Albanian football, particularly on international tournaments.', 'N/A', 'Sports History');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre) 
VALUES ('Arthur Conan Doyle', '1859-05-22', 'Sir Arthur Conan Doyle was a British writer best known for his detective fiction featuring the character Sherlock Holmes. His works include novels, short stories, and historical writings.', 'N/A', 'Detective Fiction');

insert into Author(AuthorID,Name,DateOfBirth,Biography,Awards,Genre)values(2,'Ismail Kadare','1936-01-28', 'Kadare studioi gjuhë dhe letërsi në Universitetin e Tiranës dhe më vonë në Institutin Gorki të Letërsisë Botërore në Moskë.',	'3', 'roman' );
insert into Author(AuthorID,Name,DateOfBirth,Biography,Awards,Genre)values(3,'Jill Murphy','1949-07-05', 'ishte një autore dhe ilustratore britanike',	'2', 'Femije' );
insert into Author(AuthorID,Name,DateOfBirth,Biography,Awards,Genre)values(4,'Flora Brovina','1949-09-30', 'Ajo u lind në Skenderaj, në rajonin e Drenicës, dhe u rrit në Prishtinë, ku bëri edhe shkollën dhe filloi të studionte mjekësi.',	'2', 'poezi moderne' );
insert into Author(AuthorID,Name,DateOfBirth,Biography,Awards,Genre)values(5, 'Daniel Smith' , '1976-03-02' ,'Ka përfunduar studimet në Universitetin e Bostonit dhe më vonë ka marrë një diplomë master në Shkollën e Shërbimeve Ndërkombëtare në Universitetin Amerikan.' , '0' ,'history, shendet mendor ');
insert into Author(Name,DateOfBirth,Biography,Awards,Genre)values('Colleen Hoover','1979-12-11', 'Hoover ka studiuar në Universitetin e Teksasit A&M-Commerce, ku mori një diplomë në Shkenca Sociale.',	'3', 'romance, thriller,drame' );
insert into Author(Name,DateOfBirth,Biography,Awards,Genre)values('Charles Bukowski','1920-08-16','Për shkak të stilin e tij të hapur dhe të drejtpërdrejtë, Bukowski është një figurë polarizuese në botën e letërsisë, duke pëlqyer nga disa për sinqeritetin dhe autenticitetin e tij', '3' , 'poezi , proze e shkurter');
insert into Author(Name,DateOfBirth,Biography,Awards,Genre)values('Daniel Pennac', '1944-12-1' , 'është një shkrimtar francez i njohur për veprat e tij të përshkruara për adoleshentë dhe të rritur. ', '4','roman , ese, libra per femije');
insert into Author(Name,DateOfBirth,Biography,Awards,Genre)values('Dina Rubina','1953-05-10' , ' është njohur edhe për angazhimin e saj në fushën e kulturës dhe për mbështetjen e letërsisë në Rusi.', '0', 'Romance, novela');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Domenico Starnone', '1943-01-01', 'Starnone ka fituar vlerësim për stilin e tij të shkëlqyeshëm narrativ dhe për qasjen e tij ndaj temave komplekse shoqërore dhe psikologjike.','2', 'Roman, Novela, Ese');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Elif Shafak', '1971-10-25', 'Elif Shafak është një shkrimtare e njohur turke me një stil të shkëlqyeshëm të shkrimit dhe temat e thella shoqërore dhe kulturore në veprat e saj.', '3', 'Roman, Novela, Ese');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Emilian Shafak', '1965-08-15', 'Emilian Shafak është një shkrimtar i njohur turk me një stil të veçantë narrativ dhe një qasje të thellë ndaj temave të identitetit dhe historisë.', '2', 'Roman, Novela');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Aysel Tekin', '1980-03-02', 'Aysel Tekin është një autore e re turke që ka fituar vëmendjen e kritikëve për veprat e saj të rralla të poezisë moderne dhe të prozës eksperimentale.', '1', 'Poezi, Prozë');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Burhan Sonmez', '1975-12-30', 'Burhan Sonmez është një shkrimtar dhe avokat turk i cili ka shkruar veprimtari të frytshme në fushën e romanit dhe tregimeve të shkurtra, duke shfaqur një përmbajtje të thellë shoqërore dhe humaniste.', '3', 'Roman, Tregime të shkurtra');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Gabriel García Márquez', '1927-03-06', 'Gabriel García Márquez ishte një romancier, shkrimtar novelash dhe gazetar kolumbian, i njohur për realizmin magjik dhe veprën e tij "Njëqind vjet vetmi". Ai u nda nga jeta në vitin 1982 dhe u nderua me Çmimin Nobel për Letërsi.', '1', 'Roman, Novela');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Haruki Murakami', '1949-01-12', 'Haruki Murakami është një autor japonez i njohur për romanet e tij surreale dhe imagjinative, shpesh duke përzier elementë të realizmit magjik me tema të vetmisë dhe ekzistencializmit. Veprat e tij të shquara përfshijnë "Druri Norvegjez" dhe "Kafka në bregun e detit."', '3', 'Roman, Novela');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Chimamanda Ngozi Adichie', '1977-09-15', 'Chimamanda Ngozi Adichie është një autore nigeriane e njohur për rrëfimet e fuqishme dhe eksplorimin e temave si feminizmi, identiteti dhe kolonializmi. Veprat e saj të njohura përfshijnë "Një Pjesë e Diellit të Artë" dhe "Amerikania".', '2', 'Roman, Novela, Ese');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('J.K. Rowling', '1965-07-31', 'J.K. Rowling është një autore britanike më e njohur për serinë e saj "Harri Potter", e cila është bërë një nga seritë më të shitura në historinë e librave. Veprat e saj janë adaptuar në filma të suksesshëm dhe kanë marrë shumë çmime dhe nderime.', '2', 'Fantazi, Të rriturit e rinj');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Toni Morrison', '1931-02-18', 'Toni Morrison ishte një shkrimtare amerikane e njohur për romanet e saj të thella dhe për kontributin e saj në letërsinë afrikano-amerikane. Ajo fitoi Çmimin Nobel për Letërsi në vitin 1993.', '1', 'Roman');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Mario Vargas Llosa', '1936-03-28', 'Mario Vargas Llosa është një shkrimtar peruvian i njohur për romanet e tij të mëdha dhe për angazhimin e tij politik. Ai fitoi Çmimin Nobel për Letërsi në vitin 2010.', '2', 'Roman, Novela');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Arundhati Roy', '1961-11-24', 'Arundhati Roy është një shkrimtare dhe aktiviste indiane e njohur për romanin e saj "The God of Small Things", për të cilin ajo fitoi Çmimin Booker në vitin 1997. Ajo është e njohur për angazhimin e saj në çështjet sociale dhe politike.', '1', 'Roman');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Salman Rushdie', '1947-06-19', 'Salman Rushdie është një shkrimtar britanik i lindur në Indi, i njohur për romanet e tij të mëdha dhe për tregimet e tij të shkëlqyera. Ai fitoi Çmimin Booker për romanin e tij "Midnight\s Children" në vitin 1981.', '2', 'Roman, Tregim');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Fatos Kongoli', '1952-07-11', 'Fatos Kongoli është një shkrimtar dhe poet shqiptar. Veprat e tij shpesh trajtojnë temat e historisë, identitetit dhe përpjekjet njerëzore. Ai ka fituar disa çmime letrare në nivel lokal dhe ndërkombëtar.', '4', 'Roman, Poezi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Lasgush Poradeci', '1899-12-14', 'Lasgush Poradeci ishte një poet dhe shkrimtar shqiptar i njohur për poezinë e tij të thellë dhe të ndjeshme. Vepra e tij më e njohur është "Këngë të Dhëna".', '5', 'Poezi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Ernest Koliqi', '1903-12-14', 'Ernest Koliqi ishte një shkrimtar, poet, dhe publicist shqiptar. Ai është i njohur për romanin e tij "Kështjella", një nga veprat më të rëndësishme të letërsisë shqiptare.', '3', 'Roman, Poezi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Migjeni', '1911-08-13', 'Migjeni ishte një shkrimtar dhe poet shqiptar i shekullit të 20-të. Vepra e tij më e njohur është roman-poezia "Mali i Robit", e cila ka lënë një ndikim të thellë në letërsinë shqiptare.', '2', 'Roman, Poesi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Nexhat Agolli', '1930-03-04', 'Nexhat Agolli ishte një shkrimtar, poet, dramaturg dhe publicist shqiptar. Ai ka shkruar poezi të njohura dhe drama të ndryshme. Ka fituar çmime të ndryshme për veprat e tij.', '4', 'Poesi, Drama');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Dritero Agolli', '1931-10-13', 'Dritëro Agolli ishte një shkrimtar, poet dhe publicist shqiptar. Ai ka qenë një nga autorët më të rëndësishëm të letërsisë shqiptare të shekullit të 20-të. Vepra e tij shpesh trajton temat sociale dhe historike.', '3', 'Roman, Poesi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Margaret Atwood', '1939-11-18', 'Margaret Atwood është një autore kanadeze e njohur për romanet e saj të thella dhe për kontributin e saj në letërsinë distopike. Vepra më e njohur e saj është "The Handmaid\s Tale".', '8', 'Roman, Fantazi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Kazuo Ishiguro', '1954-11-08', 'Kazuo Ishiguro është një romancier dhe shkrimtar britanik me origjinë japoneze, fitues i Çmimit Nobel për Letërsi në vitin 2017 për kontributin e tij në letërsinë botërore. Vepra e tij më e njohur është roman "Remains of the Day".', '9', 'Roman, Novela');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Julian Barnes', '1946-01-19', 'Julian Barnes është një romancier, shkrimtar i eseve dhe kritik i njohur anglez. Ai fitoi Çmimin Booker në vitin 2011 për romanin e tij "The Sense of an Ending". Veprat e tij përfshijnë edhe "Flaubert/s Parrot" dhe "Arthur & George".', '6', 'Roman, Ese');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Neil Gaiman', '1960-11-10', 'Neil Gaiman është një shkrimtar dhe skenarist britanik i njohur për krijimtarinë e tij në fushën e letërsisë fantastike dhe grafike. Veprat e tij përfshijnë "American Gods", "Coraline" dhe "Sandman".', '10', 'Roman, Fantazi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('J.R.R. Tolkien', '1892-01-03', 'J.R.R. Tolkien ishte një shkrimtar, filolog dhe profesor universitar anglez, i njohur për krijimin e "The Hobbit" dhe "The Lord of the Rings". Veprat e tij janë shenjë e njohurisë së gjerë për krijimtarinë fantastike.', '5', 'Roman, Fantazi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Stephen King', '1947-09-21', 'Stephen King është një nga shkrimtarët më të suksesshëm dhe të njohur të letërsisë së horrorigrafike dhe fantastike. Veprat e tij përfshijnë "The Shining", "It", dhe "The Dark Tower" series.',' 12', 'Roman, Horrorigrafi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Agatha Christie', '1890-09-15', 'Agatha Christie ishte një shkrimtare angleze e njohur për romanet e saj detektivësh dhe koleksionet e shkurtëra, veçanërisht ato që lidhen me detektivët fiktivë Hercule Poirot dhe Miss Marple. Ajo konsiderohet një nga autorët më të shitur të gjithë kohërave.', '15', 'Mistere, Krim');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Leo Tolstoy', '1828-09-09', 'Lev Tolstoj ishte një shkrimtar rus i njohur i cili gjithashtu vlerësohet si një nga autorët më të mëdhenj të të gjitha kohërave. Veprat e tij të mëdha përfshijnë "Lufta dhe Paqja" dhe "Ana Karenina", të cilat konsiderohen ndër romanet më të mira të cilat janë krijuar ndonjëherë.', '8', 'Roman, Realizëm');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Jane Austen', '1775-12-16', 'Xhejn Ostin ishte një romancier anglez i njohur kryesisht për gjashtë romanet e tij të mëdha, duke përfshirë "Gordia dhe Paragjykimi", "Ndjenja dhe Sensibilizimi", dhe "Emma". Veprat e tij vlerësohen për realizmin e tyre, për komentet sociale të mprehta dhe për zgjuarsinë.', '6', 'Roman, Romancë');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Mark Twain', '1835-11-30', 'Mark Twain ishte një shkrimtar amerikan, humorist dhe lektor i njohur për romanet e tij "Aventurat e Tom Sawyer" dhe "Aventurat e Huckleberry Finn". Ai shpesh quhej "baba i letërsisë amerikane".', '10', 'Roman, Satirë');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('George Orwell', '1903-06-25', 'Xhorxh Oruell ishte një romancier, eseist dhe gazetar anglez i njohur për romanin e tij distopik "Nëntëmbdhjetë e Kuarti" dhe novellën alegorike "Ferma e Kafshëve". Veprat e tij njihen për komentet e tyre sociale dhe politike.', '9', 'Roman, Ese');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Virginia Woolf', '1882-01-25', 'Virginia Woolf ishte një shkrimtare angleze dhe një figurë letrare moderniste. Veprat e saj përfshijnë romane si "Zonja Dalloway", "Për Farën e Dritës", dhe "Orlando", si dhe ese mbi teorinë letrare dhe shkrimet mbi të shkruarit e grave.', '7', 'Roman, Ese');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Fyodor Dostoevsky', '1821-11-11', 'Fjodor Dostojevski ishte një romancier, filozof dhe shkrimtar rus i njohur për romanet e tij "Krime dhe Mënjanim", "Vëllezërit Karamazov", dhe "Idioti". Veprat e tij shqyrtojnë psikologjinë njerëzore dhe ekzistencializmin.', '6', 'Roman, Filozofi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Albert Camus', '1913-11-07', 'Albert Camus ishte një shkrimtar, eseist dhe filozof francez i njohur për kontributin e tij në letërsinë absurdiste dhe humanizmin e tij. Vepra e tij më e njohur është roman "The Stranger" dhe eseja "The Myth of Sisyphus".', '6', 'Roman, Ese, Filozofi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Franz Kafka', '1883-07-03', 'Franz Kafka ishte një shkrimtar boem germo-gjuhësor i njohur për veprat e tij surrealiste dhe ekzistencialiste. Romanet e tij "Gjyqi", "Metamorfoza", dhe "Kalaja" eksplorojnë tema të ndarësisë, absurdi, dhe birokracia.', '5', 'Roman, Tregim i Shkurtër');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Charlotte Bronte', '1816-04-21', 'Charlotte Bronte ishte një romanciere dhe poet angleze, më e moshuara nga tre motrat Bronte, e famshme për romanin e saj "Jane Eyre". Veprat e saj eksplorojnë tema të klasës sociale, rolit gjinor, dhe moralitetit.', '5', 'Roman, Romancë');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Ernest Hemingway', '1899-07-21', 'Ernest Hemingway ishte një romancier, shkrimtar i tregimeve të shkurtra, dhe gazetar amerikan. Ai fitoi Çmimin Nobel për Letërsi në vitin 1954 për romanin e tij "Burrin e Vjetër dhe Detin" dhe njihet për stilin e tij ekonomik dhe të zvogëluar.', '6', 'Roman, Tregim i Shkurtër');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Jorge Luis Borges', '1899-08-24', 'Jorge Luis Borges ishte një poet, shkrimtar dhe eseist argjentinas i njohur për krijimet e tij të vështira dhe të ngjarjeve alternative. Veprat e tij janë shpesh të përqëndruara në ide të ndjeshmërisë metafizike dhe në perceptimin e kohës dhe hapësirës.', '6', 'Poezi, Tregim, Ese');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('William Shakespeare', '1564-04-23', 'William Shakespeare ishte një shkrimtar, poet dhe dramaturg anglez i njohur për veprat e tij të shquara si "Hamlet", "Romeo dhe Zhuljeta", dhe "Macbeth". Ai shkroi në periudhën e Rinascimit Anglez dhe është konsideruar si një nga autorët më të rëndësishëm në letërsinë botërore.', '10', 'Tragedi, Komedie, Sonet');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Herman Melville', '1819-08-01', 'Herman Melville ishte një shkrimtar amerikan i njohur për romanin e tij epik "Moby-Dick", një nga veprat më të rëndësishme të letërsisë amerikane. Përveç kësaj, ai shkroi edhe shumë tregime të tjera dhe ese.', '5', 'Roman, Ese, Klasikë');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Emily Dickinson', '1830-12-10', 'Emily Dickinson ishte një poet amerikane e njohur për stilin e saj unik dhe eksplorimin e temave si natyra, dashuria dhe vdekja. Edhe pse ajo nuk u njoh gjerësisht gjatë jetës së saj, puna e saj është vlerësuar gjithnjë e më shumë në botën e letërsisë.', '3', 'Poezi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Charles Dickens', '1812-02-07', 'Charles Dickens ishte një shkrimtar anglez dhe kritik shoqëror i njohur për personazhet e tij të gjallë dhe përshkrime të shoqërisë viktoriane. Romanet e tij, duke përfshirë "Prishtina e Madhe" dhe "Të Dyja Qytetet", konsiderohen klasika të letërsisë angleze.', '10', 'Roman, Kritikë Shoqërore');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('James Joyce', '1882-02-02', 'James Joyce ishte një romancier dhe poet irlandez i njohur për teknikat narrative inovative dhe eksplorimin e rrjedhjes së vetëdijes. Veprat e tij, si "Ulysses" dhe "Dubliners", konsiderohen ndër arritjet më të mëdha letrare të shekullit të 20.', '8', 'Roman, Modernizëm');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Edgar Allan Poe', '1809-01-19', 'Edgar Allan Poe ishte një poet, shkrimtar dhe kritik amerikan i njohur për tregimet e tij të shkurtra dhe poezinë e tij të errët dhe misterioze. Disa nga veprat e tij më të njohura përfshijnë "The Raven" dhe "The Tell-Tale Heart".', '4', 'Poezi, Tregim i Shkurtër, Horror');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Italo Calvino', '1923-10-15', 'Italo Calvino ishte një shkrimtar italian, i njohur për romanet e tij eksperimentale si "Qytetet e padukshme" dhe "Emri i saj është asnjë". Veprat e tij përfshijnë elemente të fantastikës, metafizikës dhe filozofisë.', '6', 'Roman, Fantazi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Hermann Hesse', '1877-07-02', 'Hermann Hesse ishte një shkrimtar gjerman, fitues i Çmimit Nobel për Letërsi. Veprat e tij më të njohura përfshijnë "Step" dhe "Siddhartha", të cilat shqyrtojnë temat e spiritualitetit dhe vetëdijes.', '4', 'Roman, Filozofi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Jorge Luis Borges', '1899-08-24', 'Jorge Luis Borges ishte një shkrimtar, poet dhe eseist argjentinas. Veprat e tij shpesh kombinojnë elemente të letërsisë fantastike, filozofisë dhe metafizikës. Ai është vlerësuar si një nga shkrimtarët më të shquar të shekullit XX.', '5', 'Tregim, Ese');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Kazuo Ishiguro', '1954-11-08', 'Kazuo Ishiguro është një shkrimtar britaniko-japonez. Veprat e tij më të njohura janë "Nocturnes: pesë histori mbi muzikën dhe perëndimin" dhe "Giganti i Përndjekur". Në vitin 2017, ai fitoi Çmimin Nobel për Letërsi.', '4', 'Roman, Letërsi japoneze');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Paulo Coelho', '1947-08-24', 'Paulo Coelho është një shkrimtar dhe poet brazilian. Veprat e tij më të njohura përfshijnë "Alkimi", "Veronika vendos të vdesë" dhe "Pelegrini".', '6', 'Roman, Poezi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Zadie Smith', '1975-10-25', 'Zadie Smith është një shkrimtare dhe eseiste britanike. Romani i saj debutues, "Dhëmbët e Bardhë", fitoi njohje nga kritikët dhe u nderua me çmimin e parë të romanit Whitbread.', '4', 'Roman' );
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Arthur Conan Doyle', '1859-05-22', 'Arthur Conan Doyle ishte një mjek dhe shkrimtar anglez, i njohur më së shumti për krijimin e detektivit të famshëm Sherlock Holmes. Veprat e tij, si "A Study in Scarlet" dhe "The Hound of the Baskervilles", janë shumë të dashura nga lexuesit e detektivëve.', '3', 'Roman, Detektiv');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Mary Shelley', '1797-08-30', 'Mary Shelley ishte një shkrimtare angleze, e njohur për romanin e saj "Frankenstein". Ajo konsiderohet një nga themeluesit e letërsisë së zhanrit të tregonjave shkencore.', '2', 'Roman, Shkencë-fantazi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Oscar Wilde', '1854-10-16', 'Oscar Wilde ishte një poet dhe dramaturg irlandez. Veprat e tij të njohura përfshijnë "The Picture of Dorian Gray" dhe "The Importance of Being Earnest". Ai mbahet mend për shpirtin e tij argëtues, flambojant, dhe jetën tragjike.', '3', 'Dramë, Fiksi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Emily Bronte', '1818-07-30', 'Emily Bronte ishte një romanciere dhe poet angleze, më e njohur për romanin e saj të vetëm "Wuthering Heights". Vepra e saj konsiderohet një nga veprat më të mëdha të letërsisë angleze.', '2', 'Roman, Poezi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('D.H. Lawrence', '1885-09-11', 'D.H. Lawrence ishte një romancier, poet dhe eseist anglez. Veprat e tij eksplorojnë tema si shëndeti emocional, seksualiteti dhe instinkti. Disa nga veprat e tij të njohura përfshijnë "Sons and Lovers" dhe "Lady Chatterley\s Lover".', '4', 'Roman, Poezi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('Thomas Hardy', '1840-06-02', 'Thomas Hardy ishte një romancier dhe poet anglez, i njohur për romanet e tij të vendosura në qytetin e rrethit të fiksuara të Wessex. Disa nga veprat e tij të famshme përfshijnë "Tess of the d\Urbervilles" dhe "Far from the Madding Crowd".', '3', 'Roman, Poezi');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('John Keats', '1795-10-31', 'John Keats ishte një poet anglez i shekullit të 19-të, njohur për poezinë e tij romantike të pasur në imazhe dhe emocione. Disa nga poezitë e tij më të njohura përfshijnë "Ode to a Nightingale" dhe "Ode on a Grecian Urn".', '2', 'Poezi, Romantizëm');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)VALUES ('T.S. Eliot', '1888-09-26', 'T.S. Eliot ishte një poet, dramaturg dhe kritik amerikan-britanik, njohur për kontributin e tij në letërsinë moderne. Vepra e tij më e njohur është poemat e tij "The Waste Land" dhe drama "The Cocktail Party".', '4', 'Poezi, Drama');
INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)
VALUES 
('Elena Armas', 'Unknown', 'Elena Armas is a Spanish author who gained popularity for her contemporary romance novels.', 'Goodreads Choice Award for Romance (2022)', 'Romance');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)
VALUES 
('Ana Huang', 'Unknown', 'Ana Huang is a USA Today bestselling author known for her contemporary romance novels.', 'N/A', 'Romance');

INSERT INTO Author (Name, DateOfBirth, Biography, Awards, Genre)
VALUES 
('Laura Nowlin', 'Unknown', 'Laura Nowlin is an author known for her young adult novels that delve into complex emotional themes.', 'N/A', 'Young Adult');


select * from Author
--bookAuthors


Insert into BookAuthors(BookID,AuthorID)values(1,1)
Insert into BookAuthors(BookID,AuthorID)values(2,2)
Insert into BookAuthors(BookID,AuthorID)values(3,3)
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (2, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (3, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (4, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (5, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (6, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (7, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (8, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (9, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (10, 1);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (11, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (12, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (13, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (14, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (15, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (16, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (17, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (18, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (19, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (20, 2);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (21, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (22, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (23, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (24, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (25, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (26, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (27, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (28, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (29, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (30, 3);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (31, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (32, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (33, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (34, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (35, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (36, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (37, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (38, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (39, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (40, 4);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (41, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (42, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (43, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (44, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (45, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (46, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (47, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (48, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (49, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (50, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (6, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (20, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (34, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (48, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (62, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (76, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (90, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (104, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (118, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (132, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (7, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (21, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (35, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (49, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (63, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (77, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (91, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (105, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (119, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (133, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (8, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (22, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (36, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (50, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (64, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (78, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (92, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (106, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (120, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (134, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (9, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (23, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (37, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (51, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (65, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (79, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (93, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (107, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (121, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (135, 9);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (10, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (24, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (38, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (52, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (66, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (80, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (94, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (108, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (122, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (136, 10);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (11, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (25, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (39, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (53, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (67, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (81, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (95, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (109, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (123, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (137, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (12, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (26, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (40, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (54, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (68, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (82, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (96, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (110, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (124, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (138, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (13, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (27, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (41, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (55, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (69, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (83, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (97, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (111, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (125, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (139, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (14, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (28, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (42, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (56, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (70, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (84, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (98, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (112, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (126, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (140, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (141, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (142, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (143, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (144, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (145, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (146, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (147, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (148, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (149, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (150, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (151, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (152, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (153, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (154, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (155, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (156, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (157, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (158, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (159, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (160, 16);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (161, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (162, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (163, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (164, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (165, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (166, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (167, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (168, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (169, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (170, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (171, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (172, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (173, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (174, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (175, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (176, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (177, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (178, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (179, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (180, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (181, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (182, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (183, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (184, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (185, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (186, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (187, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (188, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (189, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (190, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (191, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (192, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (193, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (194, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (195, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (196, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (197, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (198, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (199, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (200, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (201, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (202, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (203, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (204, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (205, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (206, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (207, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (208, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (209, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (210, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (211, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (212, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (213, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (214, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (215, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (216, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (217, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (218, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (219, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (220, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (221, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (222, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (223, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (224, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (225, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (226, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (227, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (228, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (229, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (230, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (231, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (232, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (233, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (234, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (235, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (236, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (237, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (238, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (239, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (240, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (241, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (242, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (243, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (244, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (245, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (246, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (247, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (248, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (249, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (250, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (251, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (252, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (253, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (254, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (255, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (256, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (257, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (258, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (259, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (260, 26);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (261, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (262, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (263, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (264, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (265, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (266, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (267, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (268, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (269, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (270, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (271, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (272, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (273, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (274, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (275, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (276, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (277, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (278, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (279, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (280, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (281, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (282, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (283, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (284, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (285, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (286, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (287, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (288, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (289, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (290, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (291, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (292, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (293, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (294, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (295, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (296, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (297, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (298, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (299, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (300, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (301, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (302, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (303, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (304, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (305, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (306, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (307, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (308, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (309, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (310, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (311, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (312, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (313, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (314, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (315, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (316, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (317, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (318, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (319, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (320, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (321, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (322, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (323, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (324, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (325, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (326, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (327, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (328, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (329, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (330, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (331, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (332, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (333, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (334, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (335, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (336, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (337, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (338, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (339, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (340, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (341, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (342, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (343, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (344, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (345, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (346, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (1, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (2, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (3, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (4, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (5, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (6, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (7, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (8, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (9, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (10, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (11, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (12, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (13, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (14, 36);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (15, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (16, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (17, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (18, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (19, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (20, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (21, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (22, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (23, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (24, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (25, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (26, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (27, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (28, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (29, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (30, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (31, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (32, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (33, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (34, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (35, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (36, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (37, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (38, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (39, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (40, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (41, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (42, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (43, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (44, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (45, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (46, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (47, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (48, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (49, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (50, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (51, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (52, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (53, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (54, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (55, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (56, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (57, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (58, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (59, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (60, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (61, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (62, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (63, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (64, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (65, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (66, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (67, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (68, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (69, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (70, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (71, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (72, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (73, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (74, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (75, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (76, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (77, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (78, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (79, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (80, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (81, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (82, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (83, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (84, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (85, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (86, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (87, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (88, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (89, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (90, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (91, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (92, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (93, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (94, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (95, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (96, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (97, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (98, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (99, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (100, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (101, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (102, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (103, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (105, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (106, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (107, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (108, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (109, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (110, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (111, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (112, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (113, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (114, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (115, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (116, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (117, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (118, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (119, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (120, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (121, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (122, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (123, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (124, 47);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (125, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (126, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (127, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (128, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (129, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (130, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (131, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (132, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (133, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (134, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (135, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (136, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (137, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (138, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (139, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (140, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (141, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (142, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (143, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (144, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (145, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (146, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (147, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (148, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (149, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (150, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (151, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (152, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (153, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (154, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (155, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (156, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (157, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (158, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (159, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (160, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (161, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (162, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (163, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (164, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (165, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (166, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (167, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (168, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (169, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (170, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (171, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (172, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (173, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (174, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (175, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (176, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (177, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (178, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (179, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (180, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (181, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (182, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (183, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (184, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (185, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (186, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (187, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (188, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (189, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (190, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (191, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (192, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (193, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (194, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (195, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (196, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (197, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (198, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (199, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (200, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (201, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (202, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (203, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (204, 55);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (205, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (206, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (207, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (208, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (209, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (210, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (211, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (212, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (213, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (214, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (215, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (216, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (217, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (218, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (219, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (220, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (221, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (222, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (223, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (225, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (226, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (227, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (228, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (229, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (230, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (231, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (232, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (233, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (234, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (235, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (236, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (237, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (238, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (239, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (240, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (241, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (242, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (243, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (244, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (245, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (246, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (247, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (248, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (249, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (250, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (251, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (252, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (253, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (254, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (255, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (256, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (257, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (258, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (259, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (260, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (261, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (262, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (263, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (264, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (265, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (266, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (267, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (268, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (269, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (270, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (271, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (272, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (273, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (274, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (275, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (276, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (277, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (278, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (279, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (280, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (281, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (282, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (283, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (284, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (285, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (286, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (287, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (288, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (289, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (290, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (291, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (292, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (293, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (294, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (295, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (296, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (297, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (298, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (299, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (300, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (301, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (302, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (303, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (304, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (305, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (306, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (307, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (308, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (309, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (310, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (311, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (312, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (313, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (314, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (315, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (316, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (317, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (318, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (319, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (320, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (321, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (322, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (323, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (324, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (325, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (326, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (327, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (328, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (329, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (330, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (331, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (332, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (333, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (334, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (335, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (336, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (337, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (338, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (339, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (340, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (341, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (342, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (343, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (344, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (345, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (346, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (1, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (2, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (3, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (4, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (5, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (6, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (7, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (8, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (9, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (10, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (11, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (12, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (13, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (14, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (15, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (16, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (17, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (18, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (19, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (20, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (21, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (22, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (23, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (24, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (25, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (26, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (27, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (28, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (29, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (30, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (31, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (32, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (33, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (34, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (35, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (36, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (37, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (38, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (39, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (40, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (41, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (42, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (43, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (44, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (45, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (46, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (47, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (48, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (49, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (50, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (51, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (52, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (53, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (54, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (55, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (56, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (57, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (58, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (59, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (60, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (61, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (62, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (63, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (64, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (65, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (66, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (67, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (68, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (69, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (70, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (71, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (72, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (73, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (74, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (75, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (76, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (77, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (78, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (79, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (80, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (81, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (82, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (83, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (84, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (85, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (86, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (87, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (88, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (295, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (296, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (297, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (298, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (299, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (300, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (301, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (302, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (303, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (304, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (321, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (322, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (323, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (324, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (325, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (326, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (327, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (328, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (329, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (330, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (331, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (332, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (333, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (334, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (335, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (336, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (337, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (338, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (339, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (340, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (337, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (338, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (339, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (340, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (341, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (342, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (343, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (344, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (345, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (346, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (347, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (348, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (349, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (350, 82);


select * from books




--------------------shtoni per librat anglisht  ----
 

INSERT INTO BookAuthors(BookID, AuthorID) VALUES (348, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (349, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (350, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (351, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (352, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (354, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (355, 15);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (356, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (357, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (358, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (359, 73);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (360, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (361, 51);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (362, 8);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (363, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (364, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (365, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (366, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (367, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (368, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (369, 59);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (370, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (371, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (372, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (373, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (374, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (375, 14);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (376, 25);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (377, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (378, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (379, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (380, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (381, 48);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (382, 12);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (383, 83);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (384, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (385, 67);

INSERT INTO BookAuthors(BookID, AuthorID) VALUES (387, 64);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (388, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (389, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (390, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (391, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (392, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (393, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (394, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (395, 49);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (396, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (397, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (398, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (399, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (400, 69);

INSERT INTO BookAuthors(BookID, AuthorID) VALUES (401, 35);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (402, 54);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (403, 7);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (404, 78);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (405, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (406, 62);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (407, 44);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (408, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (409, 17);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (410, 66);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (411, 39);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (412, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (413, 5);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (414, 71);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (415, 31);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (416, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (417, 82);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (418, 45);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (419, 18);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (420, 70);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (421, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (422, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (423, 56);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (424, 61);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (425, 27);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (426, 30);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (427, 52);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (428, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (429, 46);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (430, 22);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (431, 34);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (432, 75);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (433, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (434, 21);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (435, 40);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (436, 63);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (437, 43);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (438, 74);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (439, 37);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (440, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (441, 53);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (442, 6);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (443, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (444, 32);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (445, 41);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (446, 19);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (447, 76);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (448, 68);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (449, 80);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (450, 38);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (451, 29);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (452, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (453, 60);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (454, 11);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (455, 67);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (456, 20);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (457, 57);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (458, 42);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (459, 65);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (460, 28);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (461, 50);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (462, 72);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (463, 77);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (464, 24);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (465, 58);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (466, 33);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (467, 79);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (468, 13);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (469, 81);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (470, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (471, 69);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (373, 23);
INSERT INTO BookAuthors(BookID, AuthorID) VALUES (383, 29);

select * from books

-----------------------------------------------lidhja me gjuh-------------------------


INSERT INTO Languages(LanguageName) values('English')
INSERT INTO Languages(LanguageName) values('Albanian')

-------------------english---------------------------------------

INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 26);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 27);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 28);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 29);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 30);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 31);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 32);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 33);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 34);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 35);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 36);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 37);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 38);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 39);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 40);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 41);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 42);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 43);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 44);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 45);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 46);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 47);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 48);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 49);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (1, 50);


-----------albanain-----------------------------------------
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 1);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 2);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 3);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 4);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 5);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 6);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 7);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 8);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 9);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 10);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 11);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 12);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 13);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 14);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 15);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 16);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 17);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 18);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 19);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 20);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 21);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 22);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 23);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 24);
INSERT INTO LanguageCategories(LanguageId, CategoryId) VALUES (2, 25);


------------------bane qeta niher tani i bani exceute krejt edhe shqip edhe anglisht---------------------------
--DELETE FROM LanguageBooks;
--DBCC CHECKIDENT ('LanguageBooks', RESEED, 0);




-----------------albanian book---------------------------
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 1);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 2);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 3);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 4);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 5);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 6);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 7);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 8);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 9);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 10);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 11);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 12);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 13);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 14);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 15);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 16);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 17);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 18);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 19);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 20);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 21);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 22);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 23);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 24);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 25);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 26);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 27);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 28);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 29);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 30);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 31);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 32);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 33);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 34);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 35);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 36);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 37);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 38);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 39);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 40);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 41);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 42);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 43);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 44);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 45);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 46);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 47);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 48);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 49);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 50);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 51);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 52);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 53);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 54);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 55);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 56);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 57);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 58);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 59);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 60);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 61);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 62);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 63);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 64);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 65);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 66);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 67);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 68);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 69);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 70);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 71);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 72);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 73);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 74);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 75);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 76);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 77);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 78);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 79);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 80);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 81);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 82);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 83);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 84);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 85);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 86);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 87);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 88);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 89);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 90);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 91);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 92);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 93);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 94);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 95);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 96);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 97);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 98);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 99);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 100);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 101);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 102);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 103);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 104);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 105);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 106);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 107);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 108);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 109);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 110);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 111);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 112);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 113);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 114);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 115);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 116);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 117);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 118);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 119);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 120);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 121);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 122);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 123);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 124);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 125);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 126);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 127);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 128);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 129);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 130);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 131);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 132);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 133);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 134);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 135);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 136);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 137);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 138);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 139);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 140);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 141);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 142);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 143);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 144);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 145);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 146);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 147);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 148);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 149);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 150);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 151);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 152);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 153);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 154);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 155);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 156);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 157);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 158);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 159);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 160);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 161);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 162);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 163);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 164);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 165);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 166);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 167);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 168);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 169);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 170);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 171);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 172);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 173);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 174);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 175);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 176);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 177);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 178);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 179);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 180);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 181);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 182);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 183);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 184);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 185);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 186);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 187);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 188);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 189);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 190);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 191);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 192);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 193);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 194);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 195);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 196);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 197);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 198);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 199);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 200);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 201);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 202);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 203);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 204);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 205);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 206);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 207);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 208);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 209);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 210);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 211);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 212);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 213);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 214);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 215);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 216);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 217);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 218);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 219);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 220);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 221);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 222);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 223);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 224);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 225);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 226);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 227);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 228);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 229);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 230);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 231);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 232);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 233);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 234);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 235);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 236);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 237);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 238);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 239);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 240);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 241);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 242);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 243);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 244);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 245);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 246);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 247);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 248);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 249);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 250);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 251);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 252);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 253);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 254);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 255);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 256);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 257);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 258);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 259);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 260);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 261);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 262);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 263);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 264);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 265);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 266);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 267);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 268);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 269);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 270);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 271);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 272);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 273);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 274);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 275);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 276);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 277);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 278);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 279);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 280);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 281);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 282);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 283);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 284);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 285);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 286);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 287);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 288);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 289);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 290);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 291);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 292);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 293);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 294);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 295);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 296);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 297);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 298);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 299);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 300);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 301);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 302);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 303);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 304);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 305);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 306);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 307);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 308);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 309);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 310);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 311);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 312);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 313);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 314);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 315);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 316);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 317);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 318);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 319);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 320);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 321);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 322);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 323);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 324);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 325);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 326);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 327);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 328);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 329);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 330);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 331);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 332);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 333);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 334);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 335);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 336);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 337);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 338);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 339);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 340);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 341);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 342);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 343);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 344);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 345);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (2, 346);





-----------------shtoni per librat anglisht----------------

INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 348);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 349);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 350);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 351);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 352);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 354);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 355);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 356);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 357);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 358);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 359);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 360);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 361);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 362);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 363);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 364);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 365);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 366);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 367);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 368);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 369);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 370);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 371);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 372);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 373);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 374);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 375);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 376);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 377);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 378);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 379);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 380);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 381);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 382);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 383);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 384);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 385);

INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 387);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 388);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 389);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 390);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 391);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 392);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 393);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 394);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 395);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 396);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 397);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 398);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 399);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 400);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 401);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 402);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 403);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 404);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 405);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 406);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 407);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 408);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 409);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 410);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 411);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 412);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 413);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 414);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 415);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 416);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 417);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 418);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 419);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 420);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 421);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 422);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 423);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 424);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 425);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 426);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 427);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 428);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 429);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 430);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 431);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 432);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 433);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 434);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 435);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 436);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 437);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 438);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 439);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 440);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 441);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 442);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 443);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 444);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 445);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 446);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 447);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 448);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 449);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 450);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 451);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 452);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 453);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 454);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 455);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 456);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 457);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 458);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 459);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 460);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 461);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 462);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 463);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 464);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 465);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 466);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 467);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 468);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 469);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 470);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 471);
INSERT INTO LanguageBooks(LanguageId, BookID) VALUES (1, 447);




 --Accessories data
INSERT INTO Accessories( Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId) 
VALUES ( 'ColorfulPageHolder.jpg','Crystal Page Holder','Kartterfly','Thumb Page Holder with a crystal energy shape, each grain is different due to a special process. Made of high quality resin material, not easy to break or deform, comfortable and smooth to the touch, ergonomic.', '8.5 cm wide, 4 cm high, 1.7 cm thick',27, '2024-05-27', 2);
INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId) 
VALUES
( 'WhiteOak-Bookend.jpeg', 'White Oak Book End', 'MAKR', 'Introducing the DUO, a flat-pack pair of bookends made for taking with you. The DUO is made of ultra-fine 9 layer custom plywood with a powder coated laser-cut steel base.', 'When assembled: 5" D x 5.25H x 3.85"W', 101.59, '2024-05-27', 3),
('DarkOak-Bookend.jpeg', 'Dark Oak Book End', 'MAKR', 'Introducing the DUO, a flat-pack pair of bookends made for taking with you. The DUO is made of ultra-fine 9 layer custom plywood with a powder coated laser-cut steel base.', 'When assembled: 5" D x 5.25H x 3.85"W', 101.59, '2024-05-27', 10),
('EasterGumOak-Bookend.jpeg', 'Easter Gum Oak Book End', 'MAKR', 'Introducing the DUO, a flat-pack pair of bookends made for taking with you. The DUO is made of ultra-fine 9 layer custom plywood with a powder coated laser-cut steel base.', 'When assembled: 5" D x 5.25H x 3.85"W', 101.59, '2024-05-27', 17),
('24Calendar.jpeg', '2024 Dotted Calendar', 'Abby Clawson Low', 'The 4th annual calendar. A striking graphic design treat thats become one of our most highly anticipated items. Available in strictly limited quantities. The 2024 edition features a different colorful dot pattern for each month.', '8.5" x 11" / spiral bound', 32, '2024-05-27', 90),
('Cista-Handbag.jpeg', 'The Cista Handbag', 'Ken Nishijo', 'The Cista features a large interior pocket, a zip-top closure for travel, shoulder strap with brass hardware, open back straps (for newspapers, umbrellas, a light jacket, etc.), and a big front pocket that can snap closed to make two smaller pockets (gusseted with ingenious folds to make them into smaller, book-friendly rectangles).', '12" H x 16" W x 6.5" D with an adjustable leather shoulder strap.', 503, '2024-05-27', 16),
('READING-mug.jpeg', 'Go Away Im Reading Mug', 'The Literary Gift Company', 'Now you can give the Priceless gift of a bit of peace and quiet to the reader in your life. Not particularly polite, but sometimes people need to be told! Perfect for anyone who just needs to finish the next chapter. And the one after that...', 'Height 8cm', 6.99, '2024-05-27', 20),
('GoAwayWoodcutTotebag.jpeg', 'Go Away Im Reading Totebag', 'The Literary Gift Company', 'You know how it is: youve found a distant bench for your lunch-break read, and... Adapted from a woodcut illustration for a 1526 edition of Le Rommant de la Rose. Now available in a canvas tote bag!', 'Bag measures 36 x 39 cm (excluding handles).', 10.99, '2024-05-27', 2),
('book-light.jpeg', 'Mini Book Light', 'Gingko', 'This mini booklight is a rechargeable lamp made to look like a book with a sleek laser cut wooden cover. When its closed, the booklight can be neatly tucked away. Powered by two led strips, perfect for reading or creating a cosy atmosphere. The mini booklight is rechargeable with a standard micro usb cable, so you can leave it plugged in for extended use, or charge it up for a camping trip or an evening in the garden. It takes about 2 hours to charge and then will stay shining for around 10 hours from a full charge.', 'Measures 170 x 215 x 25 mm', 15.49, '2024-05-27', 19),
('personal-library-kit-.jpeg', 'Personal Library Kit', 'The Literary Gift Company', 'Love lending books, but hate never getting them back? Its wonderful to share books with your friends, but there is no crueller pain than losing your treasured favourites. Keep track of them with your own personal library kit.', 'Contains 20 self-adhesive pockets, 20 checkout cards, 1 date stamp, 1 stamp pad and 1 pencil.', 20, '2024-05-27', 21),
('Notebook-Tidy.jpeg', 'Bookaroo Tidy Notebook', 'The Literary Gift Company', 'No more searching through your bag for your phone, or your pen, or your headphones - this notebook tidy will keep it all in one handy place. Perfect for students or writers. Fits most notebooks and book sizes.', 'Measures 17.5 x 10.5 cm.', 18, '2024-05-27', 21),
('The_Flying_Boy_Bookends.jpeg', 'The Flying Boy Book End', 'The Literary Gift Company', 'Peter Pan flies over the Jolly Roger - to Captain Hooks annoyance, no doubt. A brilliant way to keep your books safe and neat.', 'Made from steel. Measures: 17 x 11 x 10 cm. Single bookend. Colour green.', 27, '2024-05-27', 21),
('cat-mouse-page-marker.jpg', 'Cat & Mouse Page Marker', 'IF', 'Every Bookminder tells a different story! Position them on the top or sides of your pages and bold as brass they will turn a dull closed book into a miniature story scene. With a hint of traditional bookiness and a huge twist of contemporary cool, each themed set will mark your four favourite places.', 'pack size: 7 x 0.5 x 18 cm', 13.5, '2024-05-27', 23),
('moon-stars-page-marker.jpg', 'Moon & Stars Page Marker', 'IF', 'Every Bookminder tells a different story! Position them on the top or sides of your pages and bold as brass they will turn a dull closed book into a miniature story scene. With a hint of traditional bookiness and a huge twist of contemporary cool, each themed set will mark your four favourite places.', 'pack size: 7 x 0.5 x 18 cm', 13.5, '2024-05-27', 14),
('Alice-Page-Marker.jpg', 'Alice Page Marker', 'IF', 'Every Bookminder tells a different story! Position them on the top or sides of your pages and bold as brass they will turn a dull closed book into a miniature story scene. With a hint of traditional bookiness and a huge twist of contemporary cool, each themed set will mark your four favourite places.', 'pack size: 7 x 0.5 x 18 cm', 13.5, '2024-05-27', 25),
('thereisnosuchthingTotebag_.jpg', 'Cute Stylish Totebag', 'Nayeli', 'The tote is made from high-quality materials that can withstand the weight of even the heaviest hardcover books. It features a spacious main compartment with plenty of room for books, notebooks, e-readers, and other essentials. The long shoulder straps make it easy to carry over your shoulder, and the reinforced stitching ensures that the tote will last for years to come.', 'Bag measures 36 x 40 cm', 16.59, '2024-05-27', 20);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('GiftWrapPins.jpg', 'Pins Gift Wrap', 'If Cardboard Creations Ltd', 
        'Always judge a book by its wrapping Literally literal wrapping to adorn your chosen book gift for friends and family. A great idea for a book lover. Covers the most popular paperback and hardback book sizes. One sheet per pack.', 
        'Sheet size 490x400mm', 2.5, '2024-08-13', 12);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('PopUpBookEnd.jpg', 'The Black Pop Up Book End', 'If Cardboard Creations Ltd', 
        'Perfect for keeping your books tidy. Compact enough to take away. A solution to tidying up your book shelves. Sold flat to save on precious storage space - ''pops'' up to hold your hardback and paperback books securely.', 
        '14D x 24W x 0.1H Centimeters', 6, '2024-08-13', 7);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('PopUpBookEndWhite.jpg', 'The White Pop Up Book End', 'If Cardboard Creations Ltd', 
        'Perfect for keeping your books tidy. Compact enough to take away. A solution to tidying up your book shelves. Sold flat to save on precious storage space - ''pops'' up to hold your hardback and paperback books securely.', 
        '14D x 24W x 0.1H Centimeters', 6, '2024-08-13', 11);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('PopUpBookEndRed.jpg', 'The Red Pop Up Book End', 'If Cardboard Creations Ltd', 
        'Perfect for keeping your books tidy. Compact enough to take away. A solution to tidying up your book shelves. Sold flat to save on precious storage space - ''pops'' up to hold your hardback and paperback books securely.', 
        '14D x 24W x 0.1H Centimeters', 6, '2024-08-13', 8);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('HPSlytherinNotebook.jpg', 'Slytherin H. Potter Notebook', 'Insight Editions', 
        'This new addition to Insight Editions’ best-selling Harry Potter stationery line adapts the design of our deluxe hardcover ruled journal in a new softcover format. Featuring a flexible leatherette cover and 128 lined, acid-free pages of high-quality, heavy stock paper.', 
        '13.34 x 1.27 x 20.96 cm', 16.7, '2024-08-13', 16);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('HPGryffindorNotebook.jpg', 'Gryffindor H. Potter Notebook', 'Insight Editions', 
        'This new addition to Insight Editions’ best-selling Harry Potter stationery line adapts the design of our deluxe hardcover ruled journal in a new softcover format. Featuring a flexible leatherette cover and 128 lined, acid-free pages of high-quality, heavy stock paper.', 
        '13.34 x 1.27 x 20.96 cm', 16.7, '2024-08-13', 88);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('HPHufflepuffNotebook.jpg', 'Hufflepuff H. Potter Notebook', 'Insight Editions', 
        'This new addition to Insight Editions’ best-selling Harry Potter stationery line adapts the design of our deluxe hardcover ruled journal in a new softcover format. Featuring a flexible leatherette cover and 128 lined, acid-free pages of high-quality, heavy stock paper.', 
        '13.34 x 1.27 x 20.96 cm', 16.7, '2024-08-13', 45);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('HPRavenclawNotebook.jpg', 'Ravenclaw H. Potter Notebook', 'Insight Editions', 
        'This new addition to Insight Editions’ best-selling Harry Potter stationery line adapts the design of our deluxe hardcover ruled journal in a new softcover format. Featuring a flexible leatherette cover and 128 lined, acid-free pages of high-quality, heavy stock paper.', 
        '13.34 x 1.27 x 20.96 cm', 16.7, '2024-08-13', 50);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('HPTheDeathlyHallowsNb.jpg', 'Deathly Hallows H. Potter', 'Insight Editions', 
        'This new addition to Insight Editions’ best-selling Harry Potter stationery line adapts the design of our deluxe hardcover ruled journal in a new softcover format. Featuring a flexible leatherette cover and 128 lined, acid-free pages of high-quality, heavy stock paper.', 
        '13.34 x 1.27 x 20.96 cm', 17.2, '2024-08-13', 26);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('HPHogwartsNotebook.jpg', 'Hogwarts H. Potter Notebook', 'Insight Editions', 
        'This new addition to Insight Editions’ best-selling Harry Potter stationery line adapts the design of our deluxe hardcover ruled journal in a new softcover format. Featuring a flexible leatherette cover and 128 lined, acid-free pages of high-quality, heavy stock paper.', 
        '13.34 x 1.27 x 20.96 cm', 17.2, '2024-08-13', 16);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('BookaroNotebookClassic.jpg', 'Bookaroo Notebook Teal', 'If Cardboard Creations Ltd', 
        'A Bookaroo notebook is packed from PU cover to cover with 192 pages of smooth, ink-friendly, good quality ivory paper, included contents pages and a place to number your pages.', 
        '13.46 x 1.52 x 21.59 cm', 8.5, '2024-08-13', 21);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('BookarooNotebookBlack.jpg', 'Bookaroo Notebook Black', 'If Cardboard Creations Ltd', 
        'A Bookaroo notebook is packed from PU cover to cover with 192 pages of smooth, ink-friendly, good quality ivory paper, included contents pages and a place to number your pages.', 
        '13.46 x 1.52 x 21.59 cm', 8.5, '2024-08-13', 20);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('BookarooNotebookBrown.jpg', 'Bookaroo Notebook Brown', 'If Cardboard Creations Ltd', 
        'A Bookaroo notebook is packed from PU cover to cover with 192 pages of smooth, ink-friendly, good quality ivory paper, included contents pages and a place to number your pages.', 
        '13.46 x 1.52 x 21.59 cm', 8.5, '2024-08-13', 77);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('RedEarplugs.jpg', 'I''m Offline Red Earplugs', 'If Cardboard Creations Ltd', 
        'Fully compliant quality foam for a comfortable fit\nEasy to use Just pop them gently into your ears and sit back and enjoy the peace and quiet.', 
        'One Size', 4.3, '2024-07-19', 50);

INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId)
VALUES ('BlueEarplugs.jpg', 'I''m Reading Blue Earplugs', 'If Cardboard Creations Ltd', 
        'Fully compliant quality foam for a comfortable fit\nEasy to use Just pop them gently into your ears and sit back and enjoy the peace and quiet.', 
        'One Size', 4.3, '2024-07-19', 33);
INSERT INTO Accessories (Image, Name, Seller, Description, Dimensions, Price, DateofAddition, StockId) 
VALUES
('Leather-page-holder.jpeg', 'Leather Heart Page Holder', 'SZRMOCYD', 'Great-Quality Handmade Material: Our Heart Bookmark is made of PU leather, which is soft, lightweight and does not hurt the book. The page clips are waterproof, reliable and durable, not easy to loosen or wear. Can protect the corners of the book and will be reusable and serve for a long time. Easy to insert into any books without taking too much space. The designs are handmade with vintage leather that looks elegant, they can serve as book markers and beautiful book accessories.', '2.9"L x 2.1". Item Weight: 15 Grams', 12.99, '2024-05-27', 2),

('ResinArt-BookPageHolder.jpeg', 'Floral Resin Page Holder', 'Outus', 'Hand-made flower book page holder is practical and stylish, exquisite and cute; Besides, there is a about 2 cm hole in the middle, which is convenient for your fingers to fix it. It is made by hand with dried flowers and resin.', '8.5 cm wide, 4 cm high, 1.7 cm thick, and thumb hole diameter includes 4 options: 1.8 cm, 0.2 cm, 2.2 cm, 2.4 cm', 10.00, '2024-05-27', 2);








--------Countries
CREATE TABLE Countries (
    countryID INT AUTO_INCREMENT PRIMARY KEY,
    countryName VARCHAR(255) NOT NULL
);

INSERT INTO Countries (countryName) VALUES
('Kosovo'),
('Afghanistan'),
('Albania'),
('Algeria'),
('Andorra'),
('Angola'),
('Antigua and Barbuda'),
('Argentina'),
('Armenia'),
('Australia'),
('Austria'),
('Azerbaijan'),
('Bahamas'),
('Bahrain'),
('Bangladesh'),
('Barbados'),
('Belarus'),
('Belgium'),
('Belize'),
('Benin'),
('Bhutan'),
('Bolivia'),
('Bosnia and Herzegovina'),
('Botswana'),
('Brazil'),
('Brunei'),
('Bulgaria'),
('Burkina Faso'),
('Burundi'),
('Cabo Verde'),
('Cambodia'),
('Cameroon'),
('Canada'),
('Central African Republic'),
('Chad'),
('Chile'),
('China'),
('Colombia'),
('Comoros'),
('Congo'),
('Costa Rica'),
('Croatia'),
('Cuba'),
('Cyprus'),
('Czech Republic'),
('Democratic Republic of the Congo'),
('Denmark'),
('Djibouti'),
('Dominica'),
('Dominican Republic'),
('Ecuador'),
('Egypt'),
('El Salvador'),
('Equatorial Guinea'),
('Eritrea'),
('Estonia'),
('Eswatini'),
('Ethiopia'),
('Fiji'),
('Finland'),
('France'),
('Gabon'),
('Gambia'),
('Georgia'),
('Germany'),
('Ghana'),
('Greece'),
('Grenada'),
('Guatemala'),
('Guinea'),
('Guinea-Bissau'),
('Guyana'),
('Haiti'),
('Honduras'),
('Hungary'),
('Iceland'),
('India'),
('Indonesia'),
('Iran'),
('Iraq'),
('Ireland'),
('Israel'),
('Italy'),
('Jamaica'),
('Japan'),
('Jordan'),
('Kazakhstan'),
('Kenya'),
('Kiribati'),
('Kuwait'),
('Kyrgyzstan'),
('Laos'),
('Latvia'),
('Lebanon'),
('Lesotho'),
('Liberia'),
('Libya'),
('Liechtenstein'),
('Lithuania'),
('Luxembourg'),
('Madagascar'),
('Malawi'),
('Malaysia'),
('Maldives'),
('Mali'),
('Malta'),
('Marshall Islands'),
('Mauritania'),
('Mauritius'),
('Mexico'),
('Micronesia'),
('Moldova'),
('Monaco'),
('Mongolia'),
('Montenegro'),
('Morocco'),
('Mozambique'),
('Myanmar'),
('Namibia'),
('Nauru'),
('Nepal'),
('Netherlands'),
('New Zealand'),
('Nicaragua'),
('Niger'),
('Nigeria'),
('North Macedonia'),
('Norway'),
('Oman'),
('Pakistan'),
('Palau'),
('Palestine'),
('Panama'),
('Papua New Guinea'),
('Paraguay'),
('Peru'),
('Philippines'),
('Poland'),
('Portugal'),
('Qatar'),
('Romania'),
('Russia'),
('Rwanda'),
('Saint Kitts and Nevis'),
('Saint Lucia'),
('Saint Vincent and the Grenadines'),
('Samoa'),
('San Marino'),
('Sao Tome and Principe'),
('Saudi Arabia'),
('Senegal'),
('Serbia'),
('Seychelles'),
('Sierra Leone'),
('Singapore'),
('Slovakia'),
('Slovenia'),
('Solomon Islands'),
('Somalia'),
('South Africa'),
('South Korea'),
('South Sudan'),
('Spain'),
('Sri Lanka'),
('Sudan'),
('Suriname'),
('Sweden'),
('Switzerland'),
('Syria'),
('Taiwan'),
('Tajikistan'),
('Tanzania'),
('Thailand'),
('Timor-Leste'),
('Togo'),
('Tonga'),
('Trinidad and Tobago'),
('Tunisia'),
('Turkey'),
('Turkmenistan'),
('Tuvalu'),
('Uganda'),
('Ukraine'),
('United Arab Emirates'),
('United Kingdom'),
('United States'),
('Uruguay'),
('Uzbekistan'),
('Vanuatu'),
('Vatican City'),
('Venezuela'),
('Vietnam'),
('Yemen'),
('Zambia'),
('Zimbabwe');
