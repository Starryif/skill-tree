(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{171:function(n,e,s){"use strict";s.r(e);var t=s(0),E=Object(t.a)({},function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("div",{staticClass:"content"},[n._m(0),n._v(" "),s("p",[n._v("结构化查询语言(Structured Query Language，简称SQL)就是访问和处理关系数据库的计算机标准语言。")]),n._v(" "),s("p",[n._v("参考资料:\n"),s("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/001508284671805d39d23243d884b8b99f440bfae87b0f4000",target:"_blank",rel:"noopener noreferrer"}},[n._v("廖雪峰的官方教程"),s("OutboundLink")],1)]),n._v(" "),n._m(1),n._v(" "),s("p",[n._v("1、为什么需要数据库？因为应用程序需要保存用户的数据。要保存用户的数据，一个最简单的方法是把用户数据写入文件。\n2、随着应用程序的功能越来越复杂，数据量越来越大，如何管理这些数据就成了大问题：读写文件并解析出数据需要大量重复代码；\n从成千上万的数据中快速查询出指定数据需要复杂的逻辑。\n3、如果每个应用程序都各自写自己的读写数据的代码，一方面效率低，容易出错，另一方面，每个应用程序访问数据的接口都不相同，数据难以复用。\n4、数据库作为一种专门管理数据的软件就出现了。应用程序不需要自己管理数据，而是通过数据库软件提供的接口来读写数据。至于数据本身如何存储到文件，那是数据库软件的事情，应用程序自己并不关心。\n5、数据库按照数据结构来组织、存储和管理数据。数据库一共有三种模型：层次模型、网状模型、关系模型。\n层次模型就是以“上下级”的层次关系来组织数据的一种方式，层次模型的数据结构看起来就像一颗树。\n网状模型把每个数据节点和其他很多节点都连接起来，它的数据结构看起来就像很多城市之间的路网。\n关系模型把数据看作是一个二维表格，任何数据都可以通过行号+列号来唯一确定，它的数据模型看起来就是一个Excel表。\n因为相比层次模型和网状模型，关系模型理解和使用起来最简单。所以关系数据库获得了最广泛的应用\n关系数据库的关系模型是基于数学理论建立的。\n6、数据类型\n对于一个关系表，除了定义每一列的名称外，还需要定义每一列的数据类型。关系数据库支持的标准数据类型包括数值、字符串、时间等：\nINT\t整型\t4字节整数类型，范围约+/-21亿\nBIGINT\t长整型\t8字节整数类型，范围约+/-922亿亿\nREAL/FLOAT(24)\t浮点型\t4字节浮点数，范围约+/-1038\nDOUBLE\t浮点型\t8字节浮点数，范围约+/-10308\nDECIMAL(M,N)\t高精度小数\t由用户指定精度的小数，例如，DECIMAL(20,10)表示一共20位，其中小数10位，通常用于财务计算\nCHAR(N)\t定长字符串\t存储指定长度的字符串，例如，CHAR(100)总是存储100个字符的字符串\nVARCHAR(N)\t变长字符串\t存储可变长度的字符串，例如，VARCHAR(100)可以存储0~100个字符的字符串\nBOOLEAN\t布尔类型\t存储True或者False\nDATE\t日期类型\t存储日期，例如，2018-06-22\nTIME\t时间类型\t存储时间，例如，12:20:59\nDATETIME\t日期和时间类型\t存储日期+时间，例如，2018-06-22 12:20:59\nTINYINT（范围在0~255）\n各数据库厂商还会支持特定的数据类型，例如JSON\n选择数据类型的时候，要根据业务规则选择合适的类型。通常来说，BIGINT能满足整数存储的需求，VARCHAR(N)能满足字符串存储的需求，这两种类型是使用最广泛的。\n7、主流关系数据库\n商用数据库，例如：Oracle，SQL Server，DB2等；\n开源数据库，例如：MySQL，PostgreSQL等；\n桌面数据库，以微软Access为代表，适合桌面应用程序使用；\n嵌入式数据库，以Sqlite为代表，适合手机应用和桌面程序。\n8、SQL是结构化查询语言的缩写，用来访问和操作数据库系统。SQL语句既可以查询数据库中的数据，也可以添加、更新和删除数据库中的数据，还可以对数据库进行管理和维护操作。不同的数据库，都支持SQL，通过SQL这一种语言，就可以操作各种不同的数据库。\n9、虽然SQL已经被ANSI组织定义为标准，不幸地是，各个不同的数据库对标准的SQL支持不太一致。并且，大部分数据库都在标准的SQL上做了扩展。如果只使用标准SQL，理论上所有数据库都可以支持，但如果使用某个特定数据库的扩展SQL，换一个数据库就不能执行了。例如，Oracle把自己扩展的SQL称为PL/SQL，Microsoft把自己扩展的SQL称为T-SQL。\n10、现实情况是，如果只使用标准SQL的核心功能，那么所有数据库通常都可以执行。不常用的SQL功能，不同的数据库支持的程度都不一样。而各个数据库支持的各自扩展的功能，通常我们把它们称之为“方言”。\n11、总的来说，SQL语言定义了这么几种操作数据库的能力：\nDDL：Data Definition Language\nDDL允许用户定义数据，也就是创建表、删除表、修改表结构这些操作。通常，DDL由数据库管理员执行。\nDML：Data Manipulation Language\nDML为用户提供添加、删除、更新数据的能力，这些是应用程序对数据库的日常操作。\nDQL：Data Query Language\nDQL允许用户查询数据，这也是通常最频繁的数据库日常操作。\n12、语法特点\nSQL语言关键字不区分大小写！！！但是，针对不同的数据库，对于表名和列名，有的数据库区分大小写，有的数据库不区分大小写。同一个数据库，有的在Linux上区分大小写，有的在Windows上不区分大小写。\n所以，本教程约定：SQL关键字总是大写，以示突出，表名和列名均使用小写。\n13、NoSQL\n1、NoSQL数据库，即非SQL的数据库，包括MongoDB、Cassandra、Dynamo等等，它们都不是关系数据库。\n2、NoSQL的发展历程：\n1970: NoSQL = We have no SQL\n1980: NoSQL = Know SQL\n2000: NoSQL = No SQL!\n2005: NoSQL = Not only SQL\n2013: NoSQL = No, SQL!\n3、如今SQL数据库仍然承担了各种应用程序的核心数据存储，而NoSQL数据库作为SQL数据库的补充，两者不再是二选一的问题，而是主从关系。")]),n._v(" "),n._m(2),n._v(" "),s("p",[n._v("1、和其他关系数据库有所不同的是，MySQL本身实际上只是一个SQL接口，它的内部还包含了多种数据引擎，常用的包括：")]),n._v(" "),s("p",[n._v("InnoDB：由Innobase Oy公司开发的一款支持事务的数据库引擎，2006年被Oracle收购；\nMyISAM：MySQL早期集成的默认数据库引擎，不支持事务。\n2、MySQL接口和数据库引擎的关系就好比某某浏览器和浏览器引擎（IE引擎或Webkit引擎）的关系。对用户而言，切换浏览器引擎不影响浏览器界面，切换MySQL引擎不影响自己写的应用程序使用MySQL的接口。")]),n._v(" "),s("p",[n._v("使用MySQL时，不同的表还可以使用不同的数据库引擎。如果你不知道应该采用哪种引擎，记住总是选择InnoDB就好了。\n3、因为MySQL一开始就是开源的，所以基于MySQL的开源版本，又衍生出了各种版本：\nMariaDB\n由MySQL的创始人创建的一个开源分支版本，使用XtraDB引擎。\nAurora\n由Amazon改进的一个MySQL版本，专门提供给在AWS托管MySQL用户，号称5倍的性能提升。\nPolarDB\n由Alibaba改进的一个MySQL版本，专门提供给在阿里云托管的MySQL用户，号称6倍的性能提升。\nMySQL官方版本又分了好几个版本：")]),n._v(" "),s("p",[n._v("Community Edition：社区开源版本，免费；\nStandard Edition：标准版；\nEnterprise Edition：企业版；\nCluster Carrier Grade Edition：集群版。\n以上版本的功能依次递增，价格也依次递增。不过，功能增加的主要是监控、集群等管理功能，对于基本的SQL功能是完全一样的。")]),n._v(" "),s("p",[n._v("所以使用MySQL就带来了一个巨大的好处：可以在自己的电脑上安装免费的Community Edition版本，进行学习、开发、测试，部署的时候，可以选择付费的高级版本，或者云服务商提供的兼容版本，而不需要对应用程序本身做改动。\n4、安装MySQL\n要在Windows或Mac上安装MySQL，首先从MySQL官方网站下载最新的MySQL Community Server版本：")]),n._v(" "),s("p",[n._v("https://dev.mysql.com/downloads/mysql/")]),n._v(" "),s("p",[n._v("选择对应的操作系统版本，下载安装即可。在安装过程中，MySQL会自动创建一个root用户，并提示输入root口令。")]),n._v(" "),s("p",[n._v("要在Linux上安装MySQL，可以使用发行版的包管理器。例如，Debian和Ubuntu用户可以简单地通过命令apt-get install mysql-server安装最新的MySQL版本。\n5、运行MySQL\nMySQL安装后会自动在后台运行。为了验证MySQL安装是否正确，我们需要通过mysql这个命令行程序来连接MySQL服务器。")]),n._v(" "),s("p",[n._v("在命令提示符下输入mysql -u root -p，然后输入口令，如果一切正确，就会连接到MySQL服务器，同时提示符变为mysql>。")]),n._v(" "),s("p",[n._v("输入exit退出MySQL命令行。注意，MySQL服务器仍在后台运行。")]),n._v(" "),n._m(3),n._v(" "),s("p",[n._v("1、关系数据库是建立在关系模型上的。而关系模型本质上就是若干个存储数据的二维表。\n表的每一行称为记录（Record），记录是一个逻辑意义上的数据。\n表的每一列称为字段（Column），同一个表的每一行记录都拥有相同的若干字段。\n字段定义了数据类型（整型、浮点型、字符串、日期等），以及是否允许为NULL。注意NULL表示字段数据不存在。一个整型字段如果为NULL不表示它的值为0，同样的，一个字符串型字段为NULL也不表示它的值为空串''。\n通常情况下，字段应该避免允许为NULL。不允许为NULL可以简化查询条件，加快查询速度，也利于应用程序读取数据后无需判断是否为NULL。\n和Excel表有所不同的是，关系数据库的表和表之间需要建立“一对多”，“多对一”和“一对一”的关系，这样才能够按照应用程序的逻辑来组织和存储数据。\n在关系数据库中，关系是通过主键和外键来维护的。")]),n._v(" "),n._m(4),n._v(" "),s("p",[n._v("在关系数据库中，一张表中的每一行数据被称为一条记录。一条记录就是由多个字段组成的。\n每一条记录都包含若干定义好的字段。同一个表的所有记录都有相同的字段定义。")]),n._v(" "),s("p",[n._v("对于关系表，有个很重要的约束，就是任意两条记录不能重复。不能重复不是指两条记录不完全相同，而是指能够通过某个字段唯一区分出不同的记录，这个字段被称为主键。\n对主键的要求，最关键的一点是：记录一旦插入到表中，主键最好不要再修改，因为主键是用来唯一定位记录的，修改了主键，会造成一系列的影响。由于主键的作用十分重要，如何选取主键会对业务开发产生重要影响。\n选取主键的一个基本原则是：不使用任何业务相关的字段作为主键。\n因此，身份证号、手机号、邮箱地址这些看上去可以唯一的字段，均不可用作主键。\n作为主键最好是完全业务无关的字段，一般把这个字段命名为id。常见的可作为id字段的类型有：\n1、自增整数类型（AUTO_INCREMENT）：数据库会在插入数据时自动为每一条记录分配一个自增整数，这样我们就完全不用担心主键重复，也不用自己预先生成主键；\n2、全局唯一GUID类型：使用一种全局唯一的字符串作为主键，类似8f55d96b-8acc-4636-8cb8-76bf8abc2f57。GUID算法通过网卡MAC地址、时间戳和随机数保证任意计算机在任意时间生成的字符串都是不同的，大部分编程语言都内置了GUID算法，可以自己预算出主键。\n联合主键\n关系数据库实际上还允许通过多个字段唯一标识记录，即两个或更多的字段都设置为主键，这种主键被称为联合主键。\n对于联合主键，允许一列有重复，只要不是所有主键列都重复即可。\n没有必要的情况下，尽量不使用联合主键，因为它给关系表带来了复杂度的上升。\n主键是关系表中记录的唯一标识。主键的选取非常重要：主键不要带有业务含义，而应该使用BIGINT自增或者GUID类型。主键也不应该允许NULL。")]),n._v(" "),s("p",[n._v("可以使用多个列作为联合主键，但联合主键并不常用。\n#外键\n通过某个字段，可以把数据与另一张表关联起来，这种列称为外键。\n外键并不是通过列名实现的，而是通过定义外键约束实现的：\nALTER TABLE students\nADD CONSTRAINT fk_class_id\nFOREIGN KEY (class_id)\nREFERENCES classes (id);\n其中，外键约束的名称fk_class_id可以任意，FOREIGN KEY (class_id)指定了class_id作为外键，REFERENCES classes (id)指定了这个外键将关联到classes表的id列（即classes表的主键）。\n通过定义外键约束，关系数据库可以保证无法插入无效的数据。即如果classes表不存在id=99的记录，students表就无法插入class_id=99的记录。\n由于外键约束会降低数据库的性能，大部分互联网应用程序为了追求速度，并不设置外键约束，而是仅靠应用程序自身来保证逻辑的正确性。这种情况下，class_id仅仅是一个普通的列，只是它起到了外键的作用而已。\n要删除一个外键约束，也是通过ALTER TABLE实现的：\nALTER TABLE students\nDROP FOREIGN KEY fk_class_id;\n注意：删除外键约束并没有删除外键这一列。删除列是通过DROP COLUMN ...实现的。\n多对多关系实际上是通过两个一对多关系实现的，即通过一个中间表，关联两个一对多关系，就形成了多对多关系。\n一对一关系是指，一个表的记录对应到另一个表的唯一一个记录。\n如果业务允许，完全可以把两个表合为一个表。但是，有些时候，如果某个学生没有手机号，那么，contacts表就不存在对应的记录。实际上，一对一关系准确地说，是contacts表一对一对应students表。")]),n._v(" "),s("p",[n._v("还有一些应用会把一个大表拆成两个一对一的表，目的是把经常读取和不经常读取的字段分开，以获得更高的性能。例如，把一个大的用户表分拆为用户基本信息表user_info和用户详细信息表user_profiles，大部分时候，只需要查询user_info表，并不需要查询user_profiles表，这样就提高了查询速度。\n关系数据库通过外键可以实现一对多、多对多和一对一的关系。外键既可以通过数据库来约束，也可以不设置约束，仅依靠应用程序的逻辑来保证。")]),n._v(" "),s("p",[n._v("#索引\n1、在关系数据库中，如果有上万甚至上亿条记录，在查找记录的时候，想要获得非常快的速度，就需要使用索引。")]),n._v(" "),s("p",[n._v("索引是关系数据库中对某一列或多个列的值进行预排序的数据结构。通过使用索引，可以让数据库系统不必扫描整个表，而是直接定位到符合条件的记录，这样就大大加快了查询速度。\n2、如果要经常根据score列进行查询，就可以对score列创建索引：")]),n._v(" "),s("p",[n._v("ALTER TABLE students\nADD INDEX idx_score (score);\n使用ADD INDEX idx_score (score)就创建了一个名称为idx_score，使用列score的索引。索引名称是任意的，索引如果有多列，可以在括号里依次写上\nALTER TABLE students\nADD INDEX idx_name_score (name, score);\n索引的效率取决于索引列的值是否散列，即该列的值如果越互不相同，那么索引效率越高。反过来，如果记录的列存在大量相同的值，例如gender列，大约一半的记录值是M，另一半是F，因此，对该列创建索引就没有意义。\n可以对一张表创建多个索引。索引的优点是提高了查询效率，缺点是在插入、更新和删除记录时，需要同时修改索引，因此，索引越多，插入、更新和删除记录的速度就越慢。")]),n._v(" "),s("p",[n._v("对于主键，关系数据库会自动对其创建主键索引。使用主键索引的效率是最高的，因为主键会保证绝对唯一。\n3、唯一索引\n在设计关系数据表的时候，看上去唯一的列，例如身份证号、邮箱地址等，因为他们具有业务含义，因此不宜作为主键。")]),n._v(" "),s("p",[n._v("但是，这些列根据业务要求，又具有唯一性约束：即不能出现两条记录存储了同一个身份证号。这个时候，就可以给该列添加一个唯一索引。\nALTER TABLE students\nADD UNIQUE INDEX uni_name (name);\n通过UNIQUE关键字我们就添加了一个唯一索引。\n可以只对某一列添加一个唯一约束而不创建唯一索引：")]),n._v(" "),s("p",[n._v("ALTER TABLE students\nADD CONSTRAINT uni_name UNIQUE (name);\n这种情况下，name列没有索引，但仍然具有唯一性保证。")]),n._v(" "),s("p",[n._v("无论是否创建索引，对于用户和应用程序来说，使用关系数据库不会有任何区别。这里的意思是说，当我们在数据库中查询时，如果有相应的索引可用，数据库系统就会自动使用索引来提高查询效率，如果没有索引，查询也能正常执行，只是速度会变慢。因此，索引可以在使用数据库的过程中逐步优化。\n通过对数据库表创建索引，可以提高查询速度。\n通过创建唯一索引，可以保证某一列的值具有唯一性。\n数据库索引对于用户和应用程序来说都是透明的。")]),n._v(" "),s("p",[n._v("#在线SQL\n在浏览器页面运行的一个JavaScript编写的内存型SQL数据库AlaSQL。不必运行MySQL等实际的数据库软件，即可在线编写并执行SQL语句。\n-- 以双减号开头的是注释\n请注意，在页面加载时，students表和classes表就自动被创建并填入了若干数据。由于数据只存在于浏览器的内存中，因此，如果修改了数据，重新刷新页面后，数据会重置为初始值。")]),n._v(" "),s("p",[n._v("#基本查询\n我们使用如下的SQL语句")]),n._v(" "),s("p",[n._v("SELECT * FROM <表名>\n假设表名是students，要查询students表的所有行\nSELECT * FROM students;\n使用SELECT * FROM students时，SELECT是关键字，表示将要执行一个查询，*表示“所有列”，FROM表示将要从哪个表查询\n该SQL将查询出students表的所有数据。注意：查询结果也是一个二维表，它包含列名和每一行的数据。\nSELECT语句其实并不要求一定要有FROM子句。\nSELECT 100+200;\n上述查询会直接计算出表达式的结果。虽然SELECT可以用作计算，但它并不是SQL的强项。但是，不带FROM子句的SELECT语句有一个有用的用途，就是用来判断当前到数据库的连接是否有效。许多检测工具会执行一条SELECT 1;来测试数据库连接。\n使用SELECT查询的基本语句SELECT * FROM <表名>可以查询一个表的所有行和所有列的数据。")]),n._v(" "),s("p",[n._v("SELECT查询的结果是一个二维表。")]),n._v(" "),s("p",[n._v("#条件查询\n使用SELECT * FROM <表名>可以查询到一张表的所有记录。但是，很多时候，我们并不希望获得所有记录，而是根据条件选择性地获取指定条件的记录，\nSELECT语句可以通过WHERE条件来设定查询条件，查询结果是满足查询条件的记录。\n条件查询的语法就是：\nSELECT * FROM <表名> WHERE <条件表达式>\nSELECT * FROM students WHERE score >= 80;\n条件表达式可以用<条件1> AND <条件2>表达满足条件1并且满足条件2。例如，符合条件“分数在80分或以上”，并且还符合条件“男生”，把这两个条件写出来：")]),n._v(" "),s("p",[n._v("条件1：根据score列的数据判断：score >= 80；\n条件2：根据gender列的数据判断：gender = 'M'，注意gender列存储的是字符串，需要用单引号括起来。\n就可以写出WHERE条件：score >= 80 AND gender = 'M'：\nSELECT * FROM students WHERE score >= 80 AND gender = 'M';\n第二种条件是<条件1> OR <条件2>，表示满足条件1或者满足条件2。例如，把上述AND查询的两个条件改为OR，查询结果就是“分数在80分或以上”或者“男生”，满足任意之一的条件即选出该记录：\n很显然OR条件要比AND条件宽松，返回的符合条件的记录也更多。")]),n._v(" "),s("p",[n._v("第三种条件是NOT <条件>，表示“不符合该条件”的记录。例如，写一个“不是2班的学生”这个条件，可以先写出“是2班的学生”：class_id = 2，再加上NOT：NOT class_id = 2：\n上述NOT条件NOT class_id = 2其实等价于class_id <> 2，因此，NOT查询不是很常用。")]),n._v(" "),s("p",[n._v("要组合三个或者更多的条件，就需要用小括号()表示如何进行条件运算。例如，编写一个复杂的条件：分数在80以下或者90以上，并且是男生：\nSELECT * FROM students WHERE (score < 80 OR score > 90) AND gender = 'M';\n如果不加括号，条件运算按照NOT、AND、OR的优先级进行，即NOT优先级最高，其次是AND，最后是OR。加上括号可以改变优先级。\n常用的条件表达式\n条件\t表达式举例1\t表达式举例2\t说明\n使用=判断相等\tscore = 80\tname = 'abc'\t字符串需要用单引号括起来\n使用>判断大于\tscore > 80\tname > 'abc'\t\n使用<>判断不相等\tscore <> 80\tname <> 'abc'\n字符串比较根据ASCII码，中文字符比较根据数据库设置\n使用LIKE判断相似\tname LIKE 'ab%'\tname LIKE '%bc%'\t%表示任意字符，例如'ab%'将匹配'ab'，'abc'，'abcd'\n%表示0个到多个，_表示1个\nWHERE score >= 60 AND score <= 90\nWHERE score BETWEEN 60 AND 90")]),n._v(" "),s("p",[n._v("#投影查询\n使用SELECT * FROM <表名> WHERE <条件>可以选出表中的若干条记录。我们注意到返回的二维表结构和原表是相同的，即结果集的所有列与原表的所有列都一一对应。\n如果我们只希望返回某些列的数据，而不是所有列的数据，我们可以用SELECT 列1, 列2, 列3 FROM ...，让结果集仅包含指定列。这种操作称为投影查询。\n这样返回的结果集就只包含了我们指定的列，并且，结果集的列的顺序和原表可以不一样。")]),n._v(" "),s("p",[n._v("使用SELECT 列1, 列2, 列3 FROM ...时，还可以给每一列起个别名，这样，结果集的列名就可以与原表的列名不同。它的语法是SELECT 列1 别名1, 列2 别名2, 列3 别名3 FROM ...。\n投影查询同样可以接WHERE条件，实现复杂的查询：\n使用SELECT *表示查询表的所有列，使用SELECT 列1, 列2, 列3则可以仅返回指定列，这种操作称为投影。\nSELECT语句可以对结果集的列进行重命名。")]),n._v(" "),s("p",[n._v("#排序\n我们使用SELECT查询时，细心的读者可能注意到，查询结果集通常是按照id排序的，也就是根据主键排序。这也是大部分数据库的做法。如果我们要根据其他条件排序怎么办？可以加上ORDER BY子句。例如按照成绩从低到高进行排序：\nSELECT id, name, gender, score FROM students ORDER BY score;\n如果要反过来，按照成绩从高到底排序，我们可以加上DESC表示“倒序”：\nSELECT id, name, gender, score FROM students ORDER BY score DESC;\n如果score列有相同的数据，要进一步排序，可以继续添加列名。例如，使用ORDER BY score DESC, gender表示先按score列倒序，如果有相同分数的，再按gender列排序：\nSELECT id, name, gender, score FROM students ORDER BY score DESC, gender;\n默认的排序规则是ASC：“升序”，即从小到大。ASC可以省略，即ORDER BY score ASC和ORDER BY score效果一样。")]),n._v(" "),s("p",[n._v("如果有WHERE子句，那么ORDER BY子句要放到WHERE子句后面。例如，查询一班的学生成绩，并按照倒序排序：\nSELECT id, name, gender, score\nFROM students\nWHERE class_id = 1\nORDER BY score DESC;")]),n._v(" "),s("p",[n._v("#分页查询\n使用SELECT查询时，如果结果集数据量很大，比如几万行数据，放在一个页面显示的话数据量太大，不如分页显示，每次显示100条。")]),n._v(" "),s("p",[n._v("要实现分页功能，实际上就是从结果集中显示第1~100条记录作为第1页，显示第101~200条记录作为第2页，以此类推。")]),n._v(" "),s("p",[n._v("因此，分页实际上就是从结果集中“截取”出第M~N条记录。这个查询可以通过LIMIT "),s("M",[n._v(" OFFSET "),s("N",[n._v("子句实现。我们先把所有学生按照成绩从高到低进行排序：\n现在，我们把结果集分页，每页3条记录。要获取第1页的记录，可以使用LIMIT 3 OFFSET 0：\nSELECT id, name, gender, score\nFROM students\nORDER BY score DESC\nLIMIT 3 OFFSET 0;\n上述查询LIMIT 3 OFFSET 0表示，对结果集从0号记录开始，最多取3条。注意SQL记录集的索引从0开始。")])],1)],1),n._v(" "),s("p",[n._v("如果要查询第2页，那么我们只需要“跳过”头3条记录，也就是对结果集从3号记录开始查询，把OFFSET设定为3：\nSELECT id, name, gender, score\nFROM students\nORDER BY score DESC\nLIMIT 3 OFFSET 3;\n分页查询的关键在于，首先要确定每页需要显示的结果数量pageSize（这里是3），然后根据当前页的索引pageIndex（从1开始），确定LIMIT和OFFSET应该设定的值：")]),n._v(" "),s("p",[n._v("LIMIT总是设定为pageSize；\nOFFSET计算公式为pageSize * (pageIndex - 1)。\n这样就能正确查询出第N页的记录集。\nSELECT id, name, gender, score\nFROM students\nORDER BY score DESC\nLIMIT 3 OFFSET 20;")]),n._v(" "),s("p",[n._v("Empty result set\nOFFSET超过了查询的最大数量并不会报错，而是得到一个空的结果集。\n注意\nOFFSET是可选的，如果只写LIMIT 15，那么相当于LIMIT 15 OFFSET 0。")]),n._v(" "),s("p",[n._v("在MySQL中，LIMIT 15 OFFSET 30还可以简写成LIMIT 30, 15。")]),n._v(" "),s("p",[n._v("使用LIMIT "),s("M",[n._v(" OFFSET "),s("N",[n._v("分页时，随着N越来越大，查询效率也会越来越低。")])],1)],1),n._v(" "),s("p",[n._v("小结\n使用LIMIT "),s("M",[n._v(" OFFSET "),s("N",[n._v("可以对结果集进行分页，每次查询返回结果集的一部分；")])],1)],1),n._v(" "),s("p",[n._v("分页查询需要先确定每页的数量和当前页数，然后确定LIMIT和OFFSET的值。")]),n._v(" "),s("p",[n._v("#聚合查询\n如果我们要统计一张表的数据量，例如，想查询students表一共有多少条记录，难道必须用SELECT * FROM students查出来然后再数一数有多少行吗？")]),n._v(" "),s("p",[n._v("这个方法当然可以，但是比较弱智。对于统计总数、平均数这类计算，SQL提供了专门的聚合函数，使用聚合函数进行查询，就是聚合查询，它可以快速获得结果。")]),n._v(" "),n._m(5),n._v(" "),n._m(6),n._v(" "),s("p",[n._v("函数\t说明\nSUM\t计算某一列的合计值，该列必须为数值类型\nAVG\t计算某一列的平均值，该列必须为数值类型\nMAX\t计算某一列的最大值\nMIN\t计算某一列的最小值\n注意，MAX()和MIN()函数并不限于数值类型。如果是字符类型，MAX()和MIN()会返回排序最后和排序最前的字符。")]),n._v(" "),n._m(7),n._v(" "),s("p",[n._v("#多表查询")]),n._v(" "),s("p",[n._v("SELECT查询不但可以从一张表查询数据，还可以从多张表同时查询数据。查询多张表的语法是：SELECT * FROM <表1> <表2>。")]),n._v(" "),s("p",[n._v("例如，同时从students表和classes表的“乘积”，即查询数据，可以这么写：\nSELECT * FROM students, classes;\n这种一次查询两个表的数据，查询的结果也是一个二维表，它是students表和classes表的“乘积”，即students表的每一行与classes表的每一行都两两拼在一起返回。结果集的列数是students表和classes表的列数之和，行数是students表和classes表的行数之积。")]),n._v(" "),s("p",[n._v("这种多表查询又称笛卡尔查询，使用笛卡尔查询时要非常小心，由于结果集是目标表的行数乘积，对两个各自有100行记录的表进行笛卡尔查询将返回1万条记录，对两个各自有1万行记录的表进行笛卡尔查询将返回1亿条记录。\n要解决这个问题，我们仍然可以利用投影查询的“设置列的别名”来给两个表各自的id和name列起别名：\nSELECT\nstudents.id sid,\nstudents.name,\nstudents.gender,\nstudents.score,\nclasses.id cid,\nclasses.name cname\nFROM students, classes;\n注意，多表查询时，要使用表名.列名这样的方式来引用列和设置别名，这样就避免了结果集的列名重复问题。但是，用表名.列名这种方式列举两个表的所有列实在是很麻烦，所以SQL还允许给表设置一个别名，让我们在投影查询中引用起来稍微简洁一点：\nSELECT\ns.id sid,\ns.name,\ns.gender,\ns.score,\nc.id cid,\nc.name cname\nFROM students s, classes c;\n注意到FROM子句给表设置别名的语法是FROM <表名1> <别名1>, <表名2> <别名2>。这样我们用别名s和c分别表示students表和classes表。")]),n._v(" "),s("p",[n._v("多表查询也是可以添加WHERE条件的，我们来试试：\nSELECT\ns.id sid,\ns.name,\ns.gender,\ns.score ss,\nc.id cid,\nc.name cname\nFROM students s, classes c\nWHERE s.gender = 'M' AND c.id = 1;\n这个查询的结果集每行记录都满足条件s.gender = 'M'和c.id = 1。添加WHERE条件后结果集的数量大大减少了。")]),n._v(" "),s("p",[n._v("小结\n使用多表查询可以获取M x N行记录；")]),n._v(" "),s("p",[n._v("多表查询的结果集可能非常巨大，要小心使用。")]),n._v(" "),s("p",[n._v("#连接查询\n连接查询是另一种类型的多表查询。连接查询对多个表进行JOIN运算，简单地说，就是先确定一个主表作为结果集，然后，把其他表的行有选择性地“连接”在主表结果集上。")]),n._v(" "),s("p",[n._v("例如，我们想要选出students表的所有学生信息，可以用一条简单的SELECT语句完成：\nSELECT s.id, s.name, s.class_id, s.gender, s.score FROM students s;\n但是，假设我们希望结果集同时包含所在班级的名称，上面的结果集只有class_id列，缺少对应班级的name列。")]),n._v(" "),s("p",[n._v("现在问题来了，存放班级名称的name列存储在classes表中，只有根据students表的class_id，找到classes表对应的行，再取出name列，就可以获得班级名称。")]),n._v(" "),s("p",[n._v("这时，连接查询就派上了用场。我们先使用最常用的一种内连接——INNER JOIN来实现：\nSELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score\nFROM students s\nINNER JOIN classes c\nON s.class_id = c.id;")]),n._v(" "),s("p",[n._v("注意INNER JOIN查询的写法是：")]),n._v(" "),s("p",[n._v("先确定主表，仍然使用FROM <表1>的语法；\n再确定需要连接的表，使用INNER JOIN <表2>的语法；\n然后确定连接条件，使用ON <条件...>，这里的条件是s.class_id = c.id，表示students表的class_id列与classes表的id列相同的行需要连接；\n可选：加上WHERE子句、ORDER BY等子句。\n使用别名不是必须的，但可以更好地简化查询语句。")]),n._v(" "),s("p",[n._v("那什么是内连接（INNER JOIN）呢？先别着急，有内连接（INNER JOIN）就有外连接（OUTER JOIN）。我们把内连接查询改成外连接查询，看看效果：\nSELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score\nFROM students s\nRIGHT OUTER JOIN classes c\nON s.class_id = c.id;\n执行上述RIGHT OUTER JOIN可以看到，和INNER JOIN相比，RIGHT OUTER JOIN多了一行，多出来的一行是“四班”，但是，学生相关的列如name、gender、score都为NULL。")]),n._v(" "),s("p",[n._v("这也容易理解，因为根据ON条件s.class_id = c.id，classes表的id=4的行正是“四班”，但是，students表中并不存在class_id=4的行。")]),n._v(" "),s("p",[n._v("有RIGHT OUTER JOIN，就有LEFT OUTER JOIN，以及FULL OUTER JOIN。它们的区别是：")]),n._v(" "),s("p",[n._v("INNER JOIN只返回同时存在于两张表的行数据，由于students表的class_id包含1，2，3，classes表的id包含1，2，3，4，所以，INNER JOIN根据条件s.class_id = c.id返回的结果集仅包含1，2，3。")]),n._v(" "),s("p",[n._v("RIGHT OUTER JOIN返回右表都存在的行。如果某一行仅在右表存在，那么结果集就会以NULL填充剩下的字段。")]),n._v(" "),s("p",[n._v("LEFT OUTER JOIN则返回左表都存在的行。如果我们给students表增加一行，并添加class_id=5，由于classes表并不存在id=5的行，所以，LEFT OUTER JOIN的结果会增加一行，对应的class_name是NULL：\n最后，我们使用FULL OUTER JOIN，它会把两张表的所有记录全部选择出来，并且，自动把对方不存在的列填充为NULL：\n对于这么多种JOIN查询，到底什么使用应该用哪种呢？其实我们用图来表示结果集就一目了然了。")]),n._v(" "),s("p",[n._v("假设查询语句是：")]),n._v(" "),s("p",[n._v("SELECT ... FROM tableA ??? JOIN tableB ON tableA.column1 = tableB.column2;\n把tableA看作左表，把tableB看成右表，那么INNER JOIN是选出两张表都存在的记录：\nLEFT OUTER JOIN是选出左表存在的记录：\nRIGHT OUTER JOIN是选出右表存在的记录：\nFULL OUTER JOIN则是选出左右表都存在的记录：\nJOIN查询需要先确定主表，然后把另一个表的数据“附加”到结果集上；")]),n._v(" "),s("p",[n._v("INNER JOIN是最常用的一种JOIN查询，它的语法是SELECT ... FROM <表1> INNER JOIN <表2> ON <条件...>；")]),n._v(" "),s("p",[n._v("JOIN查询仍然可以使用WHERE条件和ORDER BY排序。")]),n._v(" "),s("p",[n._v("#修改数据\n关系数据库的基本操作就是增删改查，即CRUD：Create、Retrieve、Update、Delete。\n而对于增、删、改，对应的SQL语句分别是：")]),n._v(" "),s("p",[n._v("INSERT：插入新记录；\nUPDATE：更新已有记录；\nDELETE：删除已有记录。")]),n._v(" "),s("p",[n._v("#INSERT\n当我们需要向数据库表中插入一条新记录时，就必须使用INSERT语句。\nINSERT语句的基本语法是：")]),n._v(" "),s("p",[n._v("INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...);\n例如，我们向students表插入一条新记录，先列举出需要插入的字段名称，然后在VALUES子句中依次写出对应字段的值：\nINSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80);\n-- 查询并观察结果:\nSELECT * FROM students;\n要注意，字段顺序不必和数据库表的字段顺序一致，但值的顺序必须和字段顺序一致。也就是说，可以写INSERT INTO students (score, gender, name, class_id) ...，但是对应的VALUES就得变成(80, 'M', '大牛', 2)。")]),n._v(" "),s("p",[n._v("还可以一次性添加多条记录，只需要在VALUES子句中指定多个记录值，每个记录是由(...)包含的一组值\nINSERT INTO students (class_id, name, gender, score) VALUES\n(1, '大宝', 'M', 87),\n(2, '二宝', 'M', 81);")]),n._v(" "),s("p",[n._v("SELECT * FROM students;\n小结\n使用INSERT，我们就可以一次向一个表中插入一条或多条记录。")]),n._v(" "),n._m(8),n._v(" "),s("p",[n._v("如果要更新数据库表中的记录，我们就必须使用UPDATE语句。\nUPDATE语句的基本语法是：")]),n._v(" "),s("p",[n._v("UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;\n例如，我们想更新students表id=1的记录的name和score这两个字段，先写出UPDATE students SET name='大牛', score=66，然后在WHERE子句中写出需要更新的行的筛选条件id=1：\nUPDATE students SET name='大牛', score=66 WHERE id=1;\n-- 查询并观察结果:\nSELECT * FROM students WHERE id=1;\n注意到UPDATE语句的WHERE条件和SELECT语句的WHERE条件其实是一样的，因此完全可以一次更新多条记录：\nUPDATE students SET name='小牛', score=77 WHERE id>=5 AND id<=7;\n-- 查询并观察结果:\nSELECT * FROM students;\n在UPDATE语句中，更新字段时可以使用表达式。例如，把所有80分以下的同学的成绩加10分：")]),n._v(" "),s("p",[n._v("-- 更新score<80的记录\nUPDATE students SET score=score+10 WHERE score<80;\n-- 查询并观察结果:\nSELECT * FROM students;\n其中，SET score=score+10就是给当前行的score字段的值加上了10。")]),n._v(" "),s("p",[n._v("如果WHERE条件没有匹配到任何记录，UPDATE语句不会报错，也不会有任何记录被更新。例如：\nUPDATE students SET score=100 WHERE id=999;\n-- 查询并观察结果:\nSELECT * FROM students;\n最后，要特别小心的是，UPDATE语句可以没有WHERE条件，例如：")]),n._v(" "),s("p",[n._v("UPDATE students SET score=60;\n这时，整个表的所有记录都会被更新。所以，在执行UPDATE语句时要非常小心，最好先用SELECT语句来测试WHERE条件是否筛选出了期望的记录集，然后再用UPDATE更新。")]),n._v(" "),s("p",[n._v("MySQL\n在使用MySQL这类真正的关系数据库时，UPDATE语句会返回更新的行数以及WHERE条件匹配的行数。")]),n._v(" "),s("p",[n._v("例如，更新id=1的记录时：")]),n._v(" "),s("p",[n._v("mysql> UPDATE students SET name='大宝' WHERE id=1;\nQuery OK, 1 row affected (0.00 sec)\nRows matched: 1  Changed: 1  Warnings: 0\nMySQL会返回1，可以从打印的结果Rows matched: 1 Changed: 1看到。")]),n._v(" "),s("p",[n._v("当更新id=999的记录时：")]),n._v(" "),s("p",[n._v("mysql> UPDATE students SET name='大宝' WHERE id=999;\nQuery OK, 0 rows affected (0.00 sec)\nRows matched: 0  Changed: 0  Warnings: 0\nMySQL会返回0，可以从打印的结果Rows matched: 0 Changed: 0看到。")]),n._v(" "),s("p",[n._v("小结\n使用UPDATE，我们就可以一次更新表中的一条或多条记录。")]),n._v(" "),s("p",[n._v("#DELETE\n如果要删除数据库表中的记录，我们可以使用DELETE语句。\nDELETE语句的基本语法是：")]),n._v(" "),s("p",[n._v("DELETE FROM <表名> WHERE ...;\n例如，我们想删除students表中id=1的记录，就需要这么写\nDELETE FROM students WHERE id=1;\n-- 查询并观察结果:\nSELECT * FROM students;\n注意到DELETE语句的WHERE条件也是用来筛选需要删除的行，因此和UPDATE类似，DELETE语句也可以一次删除多条记录：\nDELETE FROM students WHERE id>=5 AND id<=7;\n-- 查询并观察结果:\nSELECT * FROM students;\n如果WHERE条件没有匹配到任何记录，DELETE语句不会报错，也不会有任何记录被删除。例如：\nDELETE FROM students WHERE id=999;\n-- 查询并观察结果:\nSELECT * FROM students;\n最后，要特别小心的是，和UPDATE类似，不带WHERE条件的DELETE语句会删除整个表的数据：")]),n._v(" "),s("p",[n._v("DELETE FROM students;\n这时，整个表的所有记录都会被删除。所以，在执行DELETE语句时也要非常小心，最好先用SELECT语句来测试WHERE条件是否筛选出了期望的记录集，然后再用DELETE删除。\nMySQL\n在使用MySQL这类真正的关系数据库时，DELETE语句也会返回删除的行数以及WHERE条件匹配的行数。")]),n._v(" "),s("p",[n._v("例如，分别执行删除id=1和id=999的记录：")]),n._v(" "),s("p",[n._v("mysql> DELETE FROM students WHERE id=1;\nQuery OK, 1 row affected (0.01 sec)")]),n._v(" "),s("p",[n._v("mysql> DELETE FROM students WHERE id=999;\nQuery OK, 0 rows affected (0.01 sec)\n小结\n使用DELETE，我们就可以一次删除表中的一条或多条记录。")]),n._v(" "),s("p",[n._v("#MySQL\n安装完MySQL后，除了MySQL Server，即真正的MySQL服务器外，还附赠一个MySQL Client程序。MySQL Client是一个命令行客户端，可以通过MySQL Client登录MySQL，然后，输入SQL语句并执行。")]),n._v(" "),s("p",[n._v("打开命令提示符，输入命令mysql -u root -p，提示输入口令。填入MySQL的root口令，如果正确，就连上了MySQL Server，同时提示符变为mysql>：")]),n._v(" "),s("p",[n._v("┌────────────────────────────────────────────────────────┐\n│Command Prompt                                    - □ x │\n├────────────────────────────────────────────────────────┤\n│Microsoft Windows [Version 10.0.0]                      │\n│(c) 2015 Microsoft Corporation. All rights reserved.    │\n│                                                        │\n│C:> mysql -u root -p                                   │\n│Enter password: ******                                  │\n│                                                        │\n│Server version: 5.7                                     │\n│Copyright (c) 2000, 2018, ...                           │\n│Type 'help;' or '\\h' for help.                          │\n│                                                        │\n│mysql>                                                  │\n│                                                        │\n└────────────────────────────────────────────────────────┘\n输入exit断开与MySQL Server的连接并返回到命令提示符。")]),n._v(" "),s("p",[n._v("MySQL Client的可执行程序是mysql，MySQL Server的可执行程序是mysqld。")]),n._v(" "),s("p",[n._v("MySQL Client和MySQL Server的关系如下：")]),n._v(" "),s("p",[n._v("┌──────────────┐  SQL   ┌──────────────┐\n│ MySQL Client │───────>│ MySQL Server │\n└──────────────┘  TCP   └──────────────┘\n在MySQL Client中输入的SQL语句通过TCP连接发送到MySQL Server。默认端口号是3306，即如果发送到本机MySQL Server，地址就是127.0.0.1:3306。")]),n._v(" "),s("p",[n._v("也可以只安装MySQL Client，然后连接到远程MySQL Server。假设远程MySQL Server的IP地址是10.0.1.99，那么就使用-h指定IP或域名：")]),n._v(" "),s("p",[n._v("mysql -h 10.0.1.99 -u root -p")]),n._v(" "),s("p",[n._v("命令行程序mysql实际上是MySQL客户端，真正的MySQL服务器程序是mysqld，在后台运行。")]),n._v(" "),s("p",[n._v("#管理MySQL")]),n._v(" "),s("p",[n._v("要管理MySQL，可以使用可视化图形界面MySQL Workbench。")]),n._v(" "),s("p",[n._v("MySQL Workbench可以用可视化的方式查询、创建和修改数据库表，但是，归根到底，MySQL Workbench是一个图形客户端，它对MySQL的操作仍然是发送SQL语句并执行。因此，本质上，MySQL Workbench和MySQL Client命令行都是客户端，和MySQL交互，唯一的接口就是SQL。")]),n._v(" "),s("p",[n._v("因此，MySQL提供了大量的SQL语句用于管理。虽然可以使用MySQL Workbench图形界面来直接管理MySQL，但是，很多时候，通过SSH远程连接时，只能使用SQL命令，所以，了解并掌握常用的SQL管理操作是必须的。")]),n._v(" "),s("p",[n._v("数据库\n在一个运行MySQL的服务器上，实际上可以创建多个数据库（Database）。要列出所有数据库，使用命令：")]),n._v(" "),s("p",[n._v("mysql> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| performance_schema |\n| shici              |\n| sys                |\n| test               |\n| school             |\n+--------------------+\n其中，information_schema、mysql、performance_schema和sys是系统库，不要去改动它们。其他的是用户创建的数据库。")]),n._v(" "),s("p",[n._v("要创建一个新数据库，使用命令：")]),n._v(" "),s("p",[n._v("mysql> CREATE DATABASE test;\nQuery OK, 1 row affected (0.01 sec)\n要删除一个数据库，使用命令：")]),n._v(" "),s("p",[n._v("mysql> DROP DATABASE test;\nQuery OK, 0 rows affected (0.01 sec)\n注意：删除一个数据库将导致该数据库的所有表全部被删除。")]),n._v(" "),s("p",[n._v("对一个数据库进行操作时，要首先将其切换为当前数据库：")]),n._v(" "),s("p",[n._v("mysql> USE test;\nDatabase changed\n表\n列出当前数据库的所有表，使用命令：")]),n._v(" "),s("p",[n._v("mysql> SHOW TABLES;\n+---------------------+\n| Tables_in_test      |\n+---------------------+\n| classes             |\n| statistics          |\n| students            |\n| students_of_class1  |\n+---------------------+\n要查看一个表的结构，使用命令：")]),n._v(" "),s("p",[n._v("mysql> DESC students;\n+----------+--------------+------+-----+---------+----------------+\n| Field    | Type         | Null | Key | Default | Extra          |\n+----------+--------------+------+-----+---------+----------------+\n| id       | bigint(20)   | NO   | PRI | NULL    | auto_increment |\n| class_id | bigint(20)   | NO   |     | NULL    |                |\n| name     | varchar(100) | NO   |     | NULL    |                |\n| gender   | varchar(1)   | NO   |     | NULL    |                |\n| score    | int(11)      | NO   |     | NULL    |                |\n+----------+--------------+------+-----+---------+----------------+\n5 rows in set (0.00 sec)\n还可以使用以下命令查看创建表的SQL语句：")]),n._v(" "),n._m(9),n._v(" "),s("p",[n._v("mysql> DROP TABLE students;\nQuery OK, 0 rows affected (0.01 sec)\n修改表就比较复杂。如果要给students表新增一列birth，使用：")]),n._v(" "),s("p",[n._v("ALTER TABLE students ADD COLUMN birth VARCHAR(10) NOT NULL;\n要修改birth列，例如把列名改为birthday，类型改为VARCHAR(20)：")]),n._v(" "),s("p",[n._v("ALTER TABLE students CHANGE COLUMN birth birthday VARCHAR(20) NOT NULL;\n要删除列，使用：")]),n._v(" "),s("p",[n._v("ALTER TABLE students DROP COLUMN birthday;\n退出MySQL\n使用EXIT命令退出MySQL：")]),n._v(" "),s("p",[n._v("mysql> EXIT\nBye\n注意EXIT仅仅断开了客户端和服务器的连接，MySQL服务器仍然继续运行。")]),n._v(" "),s("p",[n._v("#实用SQL语句")]),n._v(" "),s("p",[n._v("在编写SQL时，灵活运用一些技巧，可以大大简化程序逻辑。")]),n._v(" "),s("p",[n._v("插入或替换\n如果我们希望插入一条新记录（INSERT），但如果记录已经存在，就先删除原记录，再插入新记录。此时，可以使用REPLACE语句，这样就不必先查询，再决定是否先删除再插入：")]),n._v(" "),s("p",[n._v("REPLACE INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99);\n若id=1的记录不存在，REPLACE语句将插入新记录，否则，当前id=1的记录将被删除，然后再插入新记录。")]),n._v(" "),s("p",[n._v("插入或更新\n如果我们希望插入一条新记录（INSERT），但如果记录已经存在，就更新该记录，此时，可以使用INSERT INTO ... ON DUPLICATE KEY UPDATE ...语句：")]),n._v(" "),s("p",[n._v("INSERT INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99) ON DUPLICATE KEY UPDATE name='小明', gender='F', score=99;\n若id=1的记录不存在，INSERT语句将插入新记录，否则，当前id=1的记录将被更新，更新的字段由UPDATE指定。")]),n._v(" "),s("p",[n._v("插入或忽略\n如果我们希望插入一条新记录（INSERT），但如果记录已经存在，就啥事也不干直接忽略，此时，可以使用INSERT IGNORE INTO ...语句：")]),n._v(" "),s("p",[n._v("INSERT IGNORE INTO students (id, class_id, name, gender, score) VALUES (1, 1, '小明', 'F', 99);\n若id=1的记录不存在，INSERT语句将插入新记录，否则，不执行任何操作。")]),n._v(" "),s("p",[n._v("快照\n如果想要对一个表进行快照，即复制一份当前表的数据到一个新表，可以结合CREATE TABLE和SELECT：")]),n._v(" "),s("p",[n._v("-- 对class_id=1的记录进行快照，并存储为新表students_of_class1:\nCREATE TABLE students_of_class1 SELECT * FROM students WHERE class_id=1;\n新创建的表结构和SELECT使用的表结构完全一致。")]),n._v(" "),s("p",[n._v("写入查询结果集\n如果查询结果集需要写入到表中，可以结合INSERT和SELECT，将SELECT语句的结果集直接插入到指定表中。")]),n._v(" "),s("p",[n._v("例如，创建一个统计成绩的表statistics，记录各班的平均成绩：")]),n._v(" "),s("p",[n._v("CREATE TABLE statistics (\nid BIGINT NOT NULL AUTO_INCREMENT,\nclass_id BIGINT NOT NULL,\naverage DOUBLE NOT NULL,\nPRIMARY KEY (id)\n);\n然后，我们就可以用一条语句写入各班的平均成绩：")]),n._v(" "),s("p",[n._v("INSERT INTO statistics (class_id, average) SELECT class_id, AVG(score) FROM students GROUP BY class_id;\n确保INSERT语句的列和SELECT语句的列能一一对应，就可以在statistics表中直接保存查询的结果：")]),n._v(" "),n._m(10),n._v(" "),s("p",[n._v("#事务\n在执行SQL语句的时候，某些业务要求，一系列操作必须全部执行，而不能仅执行一部分。例如，一个转账操作：")]),n._v(" "),s("p",[n._v("-- 从id=1的账户给id=2的账户转账100元\n-- 第一步：将id=1的A账户余额减去100\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n-- 第二步：将id=2的B账户余额加上100\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n这两条SQL语句必须全部执行，或者，由于某些原因，如果第一条语句成功，第二条语句失败，就必须全部撤销。")]),n._v(" "),s("p",[n._v("这种把多条语句作为一个整体进行操作的功能，被称为数据库事务。数据库事务可以确保该事务范围内的所有操作都可以全部成功或者全部失败。如果事务失败，那么效果就和没有执行这些SQL一样，不会对数据库数据有任何改动。")]),n._v(" "),s("p",[n._v("可见，数据库事务具有ACID这4个特性：")]),n._v(" "),s("p",[n._v("A：Atomic，原子性，将所有SQL作为原子工作单元执行，要么全部执行，要么全部不执行；\nC：Consistent，一致性，事务完成后，所有数据的状态都是一致的，即A账户只要减去了100，B账户则必定加上了100；\nI：Isolation，隔离性，如果有多个事务并发执行，每个事务作出的修改必须与其他事务隔离；\nD：Duration，持久性，即事务完成后，对数据库数据的修改被持久化存储。\n对于单条SQL语句，数据库系统自动将其作为一个事务执行，这种事务被称为隐式事务。")]),n._v(" "),s("p",[n._v("要手动把多条SQL语句作为一个事务执行，使用BEGIN开启一个事务，使用COMMIT提交一个事务，这种事务被称为显式事务，例如，把上述的转账操作作为一个显式事务：")]),n._v(" "),s("p",[n._v("BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n很显然多条SQL语句要想作为一个事务执行，就必须使用显式事务。")]),n._v(" "),s("p",[n._v("COMMIT是指提交事务，即试图把事务内的所有SQL所做的修改永久保存。如果COMMIT语句执行失败了，整个事务也会失败。")]),n._v(" "),s("p",[n._v("有些时候，我们希望主动让事务失败，这时，可以用ROLLBACK回滚事务，整个事务会失败：")]),n._v(" "),s("p",[n._v("BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nROLLBACK;\n数据库事务是由数据库系统保证的，我们只需要根据业务逻辑使用它就可以。")]),n._v(" "),s("p",[n._v("隔离级别\n对于两个并发执行的事务，如果涉及到操作同一条记录的时候，可能会发生问题。因为并发操作会带来数据的不一致性，包括脏读、不可重复读、幻读等。数据库系统提供了隔离级别来让我们有针对性地选择事务的隔离级别，避免数据不一致的问题。")]),n._v(" "),s("p",[n._v("SQL标准定义了4种隔离级别，分别对应可能出现的数据不一致的情况：")]),n._v(" "),s("p",[n._v("Isolation Level\t脏读（Dirty Read）\t不可重复读（Non Repeatable Read）\t幻读（Phantom Read）\nRead Uncommitted\tYes\tYes\tYes\nRead Committed\t-\tYes\tYes\nRepeatable Read\t-\t-\tYes\nSerializable\t-\t-\t-\n我们会依次介绍4种隔离级别的数据一致性问题。")]),n._v(" "),s("p",[n._v("小结\n数据库事务具有ACID特性，用来保证多条SQL的全部执行。")]),n._v(" "),n._m(11),n._v(" "),s("p",[n._v("Read Uncommitted是隔离级别最低的一种事务级别。在这种隔离级别下，一个事务会读到另一个事务更新后但未提交的数据，如果另一个事务回滚，那么当前事务读到的数据就是脏数据，这就是脏读（Dirty Read）。")]),n._v(" "),s("p",[n._v("我们来看一个例子。")]),n._v(" "),s("p",[n._v("首先，我们准备好students表的数据，该表仅一行记录：")]),n._v(" "),s("p",[n._v("mysql> select * from students;\n+----+-------+\n| id | name  |\n+----+-------+\n|  1 | Alice |\n+----+-------+\n1 row in set (0.00 sec)\n然后，分别开启两个MySQL客户端连接，按顺序依次执行事务A和事务B：")]),n._v(" "),s("p",[n._v("时刻\t事务A\t事务B\n1\tSET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;\tSET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;\n2\tBEGIN;\tBEGIN;\n3\tUPDATE students SET name = 'Bob' WHERE id = 1;\t\n4\t\tSELECT * FROM students WHERE id = 1;\n5\tROLLBACK;\t\n6\t\tSELECT * FROM students WHERE id = 1;\n7\t\tCOMMIT;\nvideo: http://liaoxuefeng.gitee.io/git-resources/read-uncommitted.mp4\n当事务A执行完第3步时，它更新了id=1的记录，但并未提交，而事务B在第4步读取到的数据就是未提交的数据。")]),n._v(" "),s("p",[n._v("随后，事务A在第5步进行了回滚，事务B再次读取id=1的记录，发现和上一次读取到的数据不一致，这就是脏读。")]),n._v(" "),s("p",[n._v("可见，在Read Uncommitted隔离级别下，一个事务可能读取到另一个事务更新但未提交的数据，这个数据有可能是脏数据。")]),n._v(" "),n._m(12),n._v(" "),s("p",[n._v("在Read Committed隔离级别下，一个事务可能会遇到不可重复读（Non Repeatable Read）的问题。")]),n._v(" "),s("p",[n._v("不可重复读是指，在一个事务内，多次读同一数据，在这个事务还没有结束时，如果另一个事务恰好修改了这个数据，那么，在第一个事务中，两次读取的数据就可能不一致。")]),n._v(" "),s("p",[n._v("我们仍然先准备好students表的数据：")]),n._v(" "),s("p",[n._v("mysql> select * from students;\n+----+-------+\n| id | name  |\n+----+-------+\n|  1 | Alice |\n+----+-------+\n1 row in set (0.00 sec)\n然后，分别开启两个MySQL客户端连接，按顺序依次执行事务A和事务B：")]),n._v(" "),s("p",[n._v("时刻\t事务A\t事务B\n1\tSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\tSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\n2\tBEGIN;\tBEGIN;\n3\t\tSELECT * FROM students WHERE id = 1;\n4\tUPDATE students SET name = 'Bob' WHERE id = 1;\t\n5\tCOMMIT;\t\n6\t\tSELECT * FROM students WHERE id = 1;\n7\t\tCOMMIT;\nvideo: http://liaoxuefeng.gitee.io/git-resources/read-committed.mp4\n当事务B第一次执行第3步的查询时，得到的结果是Alice，随后，由于事务A在第4步更新了这条记录并提交，所以，事务B在第6步再次执行同样的查询时，得到的结果就变成了Bob，因此，在Read Committed隔离级别下，事务不可重复读同一条记录，因为很可能读到的结果不一致。")]),n._v(" "),n._m(13),n._v(" "),s("p",[n._v("在Repeatable Read隔离级别下，一个事务可能会遇到幻读（Phantom Read）的问题。")]),n._v(" "),s("p",[n._v("幻读是指，在一个事务中，第一次查询某条记录，发现没有，但是，当试图更新这条不存在的记录时，竟然能成功，并且，再次读取同一条记录，它就神奇地出现了。")]),n._v(" "),s("p",[n._v("我们仍然先准备好students表的数据：")]),n._v(" "),s("p",[n._v("mysql> select * from students;\n+----+-------+\n| id | name  |\n+----+-------+\n|  1 | Alice |\n+----+-------+\n1 row in set (0.00 sec)\n然后，分别开启两个MySQL客户端连接，按顺序依次执行事务A和事务B：")]),n._v(" "),s("p",[n._v("时刻\t事务A\t事务B\n1\tSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\tSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\n2\tBEGIN;\tBEGIN;\n3\t\tSELECT * FROM students WHERE id = 99;\n4\tINSERT INTO students (id, name) VALUES (99, 'Bob');\t\n5\tCOMMIT;\t\n6\t\tSELECT * FROM students WHERE id = 99;\n7\t\tUPDATE students SET name = 'Alice' WHERE id = 99;\n8\t\tSELECT * FROM students WHERE id = 99;\n9\t\tCOMMIT;\nvideo: http://liaoxuefeng.gitee.io/git-resources/repeatable-read.mp4\n事务B在第3步第一次读取id=99的记录时，读到的记录为空，说明不存在id=99的记录。随后，事务A在第4步插入了一条id=99的记录并提交。事务B在第6步再次读取id=99的记录时，读到的记录仍然为空，但是，事务B在第7步试图更新这条不存在的记录时，竟然成功了，并且，事务B在第8步再次读取id=99的记录时，记录出现了。")]),n._v(" "),s("p",[n._v("可见，幻读就是没有读到的记录，以为不存在，但其实是可以更新成功的，并且，更新成功后，再次读取，就出现了。")]),n._v(" "),n._m(14),n._v(" "),s("p",[n._v("Serializable是最严格的隔离级别。在Serializable隔离级别下，所有事务按照次序依次执行，因此，脏读、不可重复读、幻读都不会出现。")]),n._v(" "),s("p",[n._v("虽然Serializable隔离级别下的事务具有最高的安全性，但是，由于事务是串行执行，所以效率会大大下降，应用程序的性能会急剧降低。如果没有特别重要的情景，一般都不会使用Serializable隔离级别。")]),n._v(" "),s("p",[n._v("默认隔离级别\n如果没有指定隔离级别，数据库就会使用默认的隔离级别。在MySQL中，如果使用InnoDB，默认的隔离级别是Repeatable Read。")]),n._v(" "),s("p",[n._v("#开发集成")])])},[function(){var n=this.$createElement,e=this._self._c||n;return e("h1",{attrs:{id:"sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql","aria-hidden":"true"}},[this._v("#")]),this._v(" SQL")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h2",{attrs:{id:"关系数据库概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系数据库概述","aria-hidden":"true"}},[this._v("#")]),this._v(" 关系数据库概述")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h2",{attrs:{id:"安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装MySQL")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h1",{attrs:{id:"关系模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关系模型","aria-hidden":"true"}},[this._v("#")]),this._v(" 关系模型")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h1",{attrs:{id:"主键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主键","aria-hidden":"true"}},[this._v("#")]),this._v(" 主键")])},function(){var n=this.$createElement,e=this._self._c||n;return e("p",[this._v("仍然以查询students表一共有多少条记录为例，我们可以使用SQL内置的COUNT()函数查询：\nSELECT COUNT("),e("em",[this._v(") FROM students;\nCOUNT(")]),this._v(")表示查询所有列的行数，要注意聚合的计算结果虽然是一个数字，但查询的结果仍然是一个二维表，只是这个二维表只有一行一列，并且列名是COUNT(*)。")])},function(){var n=this.$createElement,e=this._self._c||n;return e("p",[this._v("通常，使用聚合查询时，我们应该给列名设置一个别名，便于处理结果：\nSELECT COUNT("),e("em",[this._v(") num FROM students;\nCOUNT(")]),this._v(")和COUNT(id)实际上是一样的效果。另外注意，聚合查询同样可以使用WHERE条件，因此我们可以方便地统计出有多少男生、多少女生、多少80分以上的学生等：\nSELECT COUNT(*) boys FROM students WHERE gender = 'M';\n除了COUNT()函数外，SQL还提供了如下聚合函数：")])},function(){var n=this.$createElement,e=this._self._c||n;return e("p",[this._v("要统计男生的平均成绩，我们用下面的聚合查询：\nSELECT AVG(score) average FROM students WHERE gender = 'M';\n要特别注意：如果聚合查询的WHERE条件没有匹配到任何行，COUNT()会返回0，而SUM()、AVG()、MAX()和MIN()会返回NULL：\nSELECT AVG(score) average FROM students WHERE gender = 'X';\n“分组聚合”\nSELECT COUNT("),e("em",[this._v(") num FROM students GROUP BY class_id;\nSELECT class_id, COUNT(")]),this._v(") num FROM students GROUP BY class_id;\nSELECT name, class_id, COUNT("),e("em",[this._v(") num FROM students GROUP BY class_id;\n执行这条查询我们会得到一个语法错误，因为在任意一个分组中，只有class_id都相同，name是不同的，SQL引擎不能把多个name的值放入一行记录中。因此，聚合查询的列中，只能放入分组的列。\n也可以使用多个列进行分组。\nSELECT class_id, gender, COUNT(")]),this._v(") num FROM students GROUP BY class_id, gender;\nSELECT class_id,ceiling(AVG(score)) avg_score from students GROUP BY class_id ORDER BY avg_score desc;")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h1",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[this._v("#")]),this._v(" UPDATE")])},function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("p",[n._v("mysql> SHOW CREATE TABLE students;\n+----------+-------------------------------------------------------+\n| students | CREATE TABLE "),s("code",[n._v("students")]),n._v(" (                             |\n|          |   "),s("code",[n._v("id")]),n._v(" bigint(20) NOT NULL AUTO_INCREMENT,            |\n|          |   "),s("code",[n._v("class_id")]),n._v(" bigint(20) NOT NULL,                     |\n|          |   "),s("code",[n._v("name")]),n._v(" varchar(100) NOT NULL,                       |\n|          |   "),s("code",[n._v("gender")]),n._v(" varchar(1) NOT NULL,                       |\n|          |   "),s("code",[n._v("score")]),n._v(" int(11) NOT NULL,                           |\n|          |   PRIMARY KEY ("),s("code",[n._v("id")]),n._v(")                                  |\n|          | ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 |\n+----------+-------------------------------------------------------+\n1 row in set (0.00 sec)\n创建表使用CREATE TABLE语句，而删除表使用DROP TABLE语句：")])},function(){var n=this.$createElement,e=this._self._c||n;return e("blockquote",[e("p",[this._v("select * from statistics;\n+----+----------+--------------+\n| id | class_id | average      |\n+----+----------+--------------+\n|  1 |        1 |         86.5 |\n|  2 |        2 | 73.666666666 |\n|  3 |        3 | 88.333333333 |\n+----+----------+--------------+\n3 rows in set (0.00 sec)")])])},function(){var n=this.$createElement,e=this._self._c||n;return e("h1",{attrs:{id:"read-uncommitted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-uncommitted","aria-hidden":"true"}},[this._v("#")]),this._v(" Read Uncommitted")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h1",{attrs:{id:"read-committed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-committed","aria-hidden":"true"}},[this._v("#")]),this._v(" Read Committed")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h1",{attrs:{id:"repeatable-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repeatable-read","aria-hidden":"true"}},[this._v("#")]),this._v(" Repeatable Read")])},function(){var n=this.$createElement,e=this._self._c||n;return e("h1",{attrs:{id:"serializable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serializable","aria-hidden":"true"}},[this._v("#")]),this._v(" Serializable")])}],!1,null,null,null);e.default=E.exports}}]);