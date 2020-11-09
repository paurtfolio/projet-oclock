/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

// import developerMan from 'src/assets/images/illustrations/man.svg';
// import developerWoman from 'src/assets/images/illustrations/woman.svg';
// import logo from 'src/assets/images/logo.svg';

// == Import styles
import './legalnotice.scss';

// == Composant
const LegalNotice = () => (
  <div className="legalnotice">
    <h1>Mentions légales</h1>
    <h2>Projet "Trackfit" réalisé par des étudiants de l'école de formation <a href="https://oclock.io" target="_blank" rel="noreferrer"> O'Clock </a></h2>
    <strong>La seule contrepartie à l'utilisation de ces mentions légales, est l'engagement total à laisser le lien crédit subdelirium sur cette page de mentions légales.</strong><br />
    <h3><br />1. Présentation du site.<br /></h3>
    <p><br />En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site, l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
    <p><strong>Propriétaire</strong> : Etudiants O'clock<br />
      <strong>Créateur</strong>  : <a href="http://www.exemple.com/">Plusieurs créateurs</a><br />
      <strong>Responsable publication</strong> : Matthieu Depret – matthieu@oclock.com<br />
      Le responsable publication est une personne physique ou une personne morale.<br />
      <strong>Webmaster</strong> : Matthieu Depret – matthieu@oclock.com<br />
      <strong>Hébergeur</strong> : localhost – 8080<br />
      Crédits : Images personnages libre de droit.
      <br />
      Le modèle de mentions légales est offert par Subdelirium.com <a target="_blank" href="https://www.subdelirium.com/generateur-de-mentions-legales/" alt="Modèle de mentions légales">Modèle de mentions légales</a>
    </p>

    <h3><br />2. Conditions générales d’utilisation du site et des services proposés.<br /></h3>
    <p><br />L’utilisation du site TrackFit implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site TrackFit sont donc invités à les consulter de manière régulière.</p>
    <p>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par Etudiants O'clock, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.</p>
    <p>Le site TrackFit est mis à jour régulièrement par Matthieu Depret. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>
    <h3><br />3. Description des services fournis.</h3>
    <p><br />Le site TrackFit a pour objet de fournir une information concernant l’ensemble des activités de la société.</p>
    <p>Etudiants O'clock s’efforce de fournir sur le site TrackFit des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
    <p>Tous les informations indiquées sur le site TrackFit sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site TrackFit ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>

    <h3><br />4. Limitations contractuelles sur les données techniques.<br /></h3>
    <p><br />Le site utilise la technologie JavaScript.</p>
    <p>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</p>

    <h3><br />5. Propriété intellectuelle et contrefaçons.<br /></h3>
    <p><br />Etudiants O'clock est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
    <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Etudiants O'clock.</p>
    <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

    <h3><br />6. Limitations de responsabilité.<br /></h3>
    <p><br />Etudiants O'clock ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site www.lewebsitedesheros.com, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
    <p>Etudiants O'clock ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site TrackFit.</p>
    <p>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. Etudiants O'clock se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Etudiants O'clock se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>
    <h3><br />7. Gestion des données personnelles.</h3>
    <p><br />En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
    <p>A l'occasion de l'utilisation du site TrackFit, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site TrackFit, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.</p>
    <p> En tout état de cause Etudiants O'clock ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site TrackFit. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site TrackFit l’obligation ou non de fournir ces informations.</p>
    <p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>
    <p>Aucune information personnelle de l'utilisateur du site TrackFit n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de Etudiants O'clock et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site TrackFit.</p>
    <p>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>
    <h3><br />8. Liens hypertextes et cookies.</h3>
    <p><br />Le site TrackFit contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Etudiants O'clock. Cependant, Etudiants O'clock n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
    <p>La navigation sur le site TrackFit est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
    <p>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p>
    <p>Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</p>
    <p>Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée.
      Paramétrez les Règles de conservation sur :  utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour  désactiver les cookies.
    </p>
    <p>Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</p>
    <p>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences.  Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.</p>

    <h3><br />9. Droit applicable et attribution de juridiction.</h3>
    <p><br />Tout litige en relation avec l’utilisation du site TrackFit est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
    <h3><br />10. Les principales lois concernées.</h3>
    <p><br />Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</p>
    <p> Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
    <h3><br />11. Lexique.</h3>
    <p><br />Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
    <p>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>

    {/* <h1>Mentions légales</h1>
    <h2>Projet "Trackfit" réalisé par des étudiants de l'école de formation <a href="https://oclock.io" target="_blank" rel="noreferrer"> O'Clock </a></h2>

    <div className="legalnotice-content">
      <div className="legalnotice-team">

        <div className="team-card">
          <img src={developerMan} alt="membre de l'équipe" className="team-img" />
          <h2 className="team-name">
            Alexis Ouzidane
          </h2>
          <p className="team-contact">alexis.ouzidane@gmail.com</p>
          <h3 className="team-title">
            Front
          </h3>
        </div>

        <div className="team-card">
          <img src={developerMan} alt="membre de l'équipe" className="team-img" />
          <h2 className="team-name">
            Marc Chayer
          </h2>
          <p className="team-contact">marcci.@mac.com</p>
          <h3 className="team-title">
            Lead Back, Lead Front
          </h3>
        </div>

        <div className="team-card">
          <img src={developerMan} alt="membre de l'équipe" className="team-img" />
          <h2 className="team-name">
            Matthieu Depret
          </h2>
          <p className="team-contact">matthieu.depret.md@gmail.com</p>
          <h3 className="team-title">
            Git Master, Scrum Master
          </h3>
        </div>

        <div className="team-card">
          <img src={developerWoman} alt="membre de l'équipe" className="team-img" />
          <h2 className="team-name">
            Pauline Berton
          </h2>
          <p className="team-contact">pauline.berton03@gmail.com</p>
          <h3 className="team-title">
            Product Owner, Front
          </h3>
        </div>
      </div>
      <div className="legalnotice-infos">
        <img src={logo} alt="logo" className="legalnotice-logo" />
        <h2 className="legalnotice-infos-title">Design global du site :</h2>
        <p className="legalnotice-infos-desc">Réalisé par Marc Chayer</p>
        <h2 className="legalnotice-infos-title">Utilisation des icones :</h2>
        <p className="legalnotice-infos-desc">flaticon.com</p>
        <h2 className="legalnotice-infos-title">Utilisation d'ilustrations :</h2>
        <p className="legalnotice-infos-desc">https://undraw.co/illustrations</p>
      </div>
    </div> */}
  </div>
);

// == Export
export default LegalNotice;
