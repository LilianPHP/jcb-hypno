/**
 * FAQ de l'accueil — source unique.
 * Affichée par FaqSection et déclarée en FAQPage dans le Schema.org de l'accueil
 * (src/lib/schema.ts). Module sans 'use client', pour rester importable côté
 * serveur.
 *
 * Réponses en texte brut : Schema.org les reprend telles quelles. Les liens vers
 * les pages de spécialité sont ajoutés à l'affichage (`liensSpecialites`).
 *
 * Le prix et la séance à distance n'y sont pas : la section Tarifs en parle, et
 * chaque page de spécialité a sa propre question « à distance ».
 */
export const FAQ_ACCUEIL = [
  {
    q: 'Pourquoi consulter un hypnothérapeute ?',
    a: "Pour avancer sur une difficulté que la volonté seule ne suffit pas à régler : arrêter de fumer, apaiser le stress ou l'anxiété, retrouver le sommeil, changer son rapport à la nourriture, se libérer d'une phobie, sortir d'un schéma répétitif, dépasser un traumatisme, ou accompagner un enfant ou un adolescent. L'hypnose agit sur les mécanismes inconscients qui entretiennent ces difficultés. Elle ne remplace pas un avis médical.",
    liensSpecialites: true,
  },
  {
    q: 'Comment savoir si un hypnothérapeute est sérieux ?',
    a: "Regardez sa formation, son expérience et les avis de ses patients. Jean-Charles pratique l'hypnose depuis plus de 15 ans. Il est Maître Praticien en hypnose ericksonienne et PNL, formé à l'IFHE (Institut Français d'Hypnose Ericksonienne), spécialisé en addictions et en traumatismes, et certifié RITMO®. Les avis de ses patients sont publiés sur Google.",
    liensSpecialites: false,
  },
  {
    q: 'Comment se déroule une première séance ?',
    a: "La séance dure 1h. Elle commence par un entretien : Jean-Charles cerne votre demande, votre histoire et l'objectif que vous voulez atteindre. Vient ensuite la séance d'hypnose, adaptée à ce que vous avez partagé. Le déroulé est le même quel que soit le motif de consultation, au cabinet comme à distance.",
    liensSpecialites: false,
  },
  {
    q: 'Combien de séances faut-il prévoir ?',
    a: "Cela dépend du motif de consultation et de chaque personne. Chaque page de spécialité détaille ce qu'il faut prévoir.",
    liensSpecialites: true,
  },
  {
    q: "L'hypnothérapie est-elle remboursée ?",
    a: 'Les séances ne sont pas remboursées par la Sécurité sociale. Certaines mutuelles prennent en charge une partie des séances de médecines douces : renseignez-vous auprès de la vôtre.',
    liensSpecialites: false,
  },
  {
    q: 'Est-ce que je reste conscient pendant la séance ?',
    a: "Oui. L'hypnose n'est pas une perte de contrôle : vous entendez tout ce que dit Jean-Charles et vous pouvez sortir de cet état à tout moment.",
    liensSpecialites: false,
  },
] as const;
