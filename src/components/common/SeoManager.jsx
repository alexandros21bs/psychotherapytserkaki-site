import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://psychotherapytserkaki.gr'

function getSeoByPath(pathname) {
  if (pathname === '/') {
    return {
      title: 'Αδαμαντία Τσερκάκη | Συνθετική Ψυχοθεραπεύτρια',
      description:
        'Ψυχοθεραπεία στα Χανιά με ασφάλεια, εμπιστοσύνη και ενσυναίσθηση. Δια ζώσης και online συνεδρίες για ατομική, ζεύγους και οικογενειακή θεραπεία.',
    }
  }

  if (pathname === '/about') {
    return {
      title: 'Σχετικά | Αδαμαντία Τσερκάκη',
      description:
        'Γνωρίστε τη φιλοσοφία και την προσέγγιση της Αδαμαντίας Τσερκάκη. Συνθετική ψυχοθεραπεία με σεβασμό, ασφάλεια και ανθρώπινη παρουσία.',
    }
  }

  if (pathname === '/services') {
    return {
      title: 'Υπηρεσίες Ψυχοθεραπείας | Αδαμαντία Τσερκάκη',
      description:
        'Ατομική, ζεύγους και οικογενειακή θεραπεία με εξατομικευμένη προσέγγιση. Ένα ασφαλές πλαίσιο κατανόησης, επεξεργασίας και προσωπικής ανάπτυξης.',
    }
  }

  if (pathname.startsWith('/services/')) {
    return {
      title: 'Υπηρεσία Ψυχοθεραπείας | Αδαμαντία Τσερκάκη',
      description:
        'Αναλυτικές πληροφορίες για τη θεραπευτική υπηρεσία και το πλαίσιο υποστήριξης. Κλείστε πρώτη συνεδρία με ασφάλεια και εμπιστοσύνη.',
    }
  }

  if (pathname === '/blog') {
    return {
      title: 'Blog Ψυχοθεραπείας | Αδαμαντία Τσερκάκη',
      description:
        'Άρθρα για άγχος, σχέσεις και ψυχική ευεξία με πρακτική και ανθρώπινη προσέγγιση. Διαβάστε σκέψεις και εργαλεία για την καθημερινότητα.',
    }
  }

  if (pathname.startsWith('/blog/')) {
    return {
      title: 'Άρθρο | Αδαμαντία Τσερκάκη',
      description:
        'Διαβάστε άρθρο ψυχοθεραπείας με πρακτικές ιδέες και ουσιαστική προσέγγιση για προσωπική κατανόηση και ανάπτυξη.',
    }
  }

  if (pathname === '/contact') {
    return {
      title: 'Επικοινωνία | Αδαμαντία Τσερκάκη',
      description:
        'Επικοινωνήστε με την Αδαμαντία Τσερκάκη για πρώτη συνεδρία. Δια ζώσης στο Μάλεμε Χανίων και online συνεδρίες με απόλυτη εμπιστευτικότητα.',
    }
  }

  if (pathname === '/faq') {
    return {
      title: 'Συχνές Ερωτήσεις | Αδαμαντία Τσερκάκη',
      description:
        'Απαντήσεις σε συχνές ερωτήσεις για τη θεραπευτική διαδικασία, την πρώτη συνεδρία, τη διάρκεια, τις online συνεδρίες και το πλαίσιο εμπιστευτικότητας.',
    }
  }

  return {
    title: 'Σελίδα | Αδαμαντία Τσερκάκη',
    description:
      'Ψυχοθεραπεία με σεβασμό, εμπιστοσύνη και ανθρώπινη παρουσία. Δείτε τις υπηρεσίες και επικοινωνήστε για πρώτο ραντεβού.',
  }
}

export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeoByPath(pathname)
    document.title = seo.title

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.setAttribute('name', 'description')
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute('content', seo.description)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', `${BASE_URL}${pathname}`)
  }, [pathname])

  return null
}
