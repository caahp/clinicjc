import './Cards.css';

function CardsGroup() {
  const cardsData = [
    {
      imageUrl: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2021/03/26/682366222-procedimentosesteticos.png',
      title: 'Procedimento 1',
      link: 'link_para_procedimento_1',
    },
    {
      imageUrl: 'https://www.promycorpo.com.br/media/magpleasure/mpblog/list_thumbnail_file/4/3/cache/1/ece9a24a761836a70934a998c163f8c8/43bc5534a43d2150ef3e3bb77366553f.jpg',
      title: 'Procedimento 2',
      link: 'link_para_procedimento_2',
    },
    {
      imageUrl: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2021/04/16/335780764-procedimentosesteticos-capa.png',
      title: 'Procedimento 3',
      link: 'link_para_procedimento_3',
    },
    {
      imageUrl: 'https://dracarlabortoloto.com.br/carlabortoloto/wp-content/uploads/2020/09/procedimentos-esticos-1200x675.jpg',
      title: 'Procedimento 4',
      link: 'link_para_procedimento_4',
    },
    {
      imageUrl: 'https://www.clinicahaut.com.br/images/portfolio/corporal-lipocavitacao.jpg',
      title: 'Procedimento 5',
      link: 'link_para_procedimento_5',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1204160177/pt/foto/hardware-cosmetology-picture-of-happy-young-woman-with-closed-eyes-getting-rf-lifting.jpg?s=612x612&w=0&k=20&c=mWM0y9rRrNO8BmjGRSvdy6e9g7gXEHpRYycJCGuBzIs=',
      title: 'Procedimento 6',
      link: 'link_para_procedimento_6',
    },
    // Adicionar mais cards
  ];

  return (
    <div className="cards-group">
      <h1 className="page-title">Conheça nossos serviços</h1>
      <div className="cards-container">
        {cardsData.map((data, index) => (
          <a href={data.link} target="_blank" rel="noopener noreferrer" className="card" key={index} style={{ backgroundImage: `url(${data.imageUrl})` }}>
            <div className="card-content">
              <h2>{data.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardsGroup;


