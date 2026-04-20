import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { services } from '../../data/services'
import { posts } from '../../data/posts'

const BASE_URL = 'https://psychotherapytserkaki.gr'
const MAX_TITLE_LENGTH = 60
const MIN_DESCRIPTION_LENGTH = 150
const MAX_DESCRIPTION_LENGTH = 160

function truncateTitle(title) {
  if (title.length <= MAX_TITLE_LENGTH) {
    return title
  }
  return `${title.slice(0, MAX_TITLE_LENGTH - 1).trim()}…`
}

function normalizeDescription(description) {
  const cleanDescription = description.replace(/\s+/g, ' ').trim()

  if (cleanDescription.length >= MIN_DESCRIPTION_LENGTH && cleanDescription.length <= MAX_DESCRIPTION_LENGTH) {
    return cleanDescription
  }

  if (cleanDescription.length > MAX_DESCRIPTION_LENGTH) {
    return `${cleanDescription.slice(0, MAX_DESCRIPTION_LENGTH - 1).trim()}…`
  }

  const fillers = [
    ' Κλείσε πρώτη συνεδρία δια ζώσης ή online.',
    ' Δες αναλυτικά υπηρεσίες και συχνές ερωτήσεις.',
    ' Επικοινώνησε για ασφαλές και υποστηρικτικό πλαίσιο.',
  ]

  let extended = cleanDescription
  let i = 0
  while (extended.length < MIN_DESCRIPTION_LENGTH) {
    extended = `${extended}${fillers[i % fillers.length]}`
    i += 1
  }

  if (extended.length > MAX_DESCRIPTION_LENGTH) {
    return `${extended.slice(0, MAX_DESCRIPTION_LENGTH - 1).trim()}…`
  }

  return extended
}

function getSeoByPath(pathname) {
  if (pathname === '/') {
    return {
      title: 'Αδαμαντία Τσερκάκη | Ψυχοθεραπεία Χανιά',
      description:
        'Ψυχοθεραπεία στα Χανιά με ασφάλεια και ενσυναίσθηση. Κλείσε πρώτη συνεδρία δια ζώσης ή online.',
    }
  }

  if (pathname === '/about') {
    return {
      title: 'Σχετικά | Αδαμαντία Τσερκάκη',
      description:
        'Γνώρισε την προσέγγιση, τις αξίες και το υπόβαθρο της Αδαμαντίας Τσερκάκη στη συνθετική ψυχοθεραπεία.',
    }
  }

  if (pathname === '/services') {
    return {
      title: 'Υπηρεσίες Ψυχοθεραπείας | Αδαμαντία Τσερκάκη',
      description:
        'Ατομική, ζεύγους και οικογενειακή θεραπεία με εξατομικευμένη προσέγγιση. Βρες τη στήριξη που σου ταιριάζει.',
    }
  }

  if (pathname.startsWith('/services/')) {
    const slug = pathname.split('/')[2]
    const service = services.find((item) => item.slug === slug)

    if (service) {
      return {
        title: truncateTitle(`${service.title} | Αδαμαντία Τσερκάκη`),
        description: service.excerpt,
      }
    }

    return {
      title: 'Υπηρεσία Ψυχοθεραπείας | Αδαμαντία Τσερκάκη',
      description:
        'Δες αναλυτικά τη θεραπευτική υπηρεσία και επίλεξε το κατάλληλο πλαίσιο υποστήριξης για εσένα.',
    }
  }

  if (pathname === '/blog') {
    return {
      title: 'Blog Ψυχοθεραπείας | Αδαμαντία Τσερκάκη',
      description:
        'Άρθρα για άγχος, σχέσεις και ψυχική ευεξία με πρακτική προσέγγιση. Διάβασε χρήσιμες ιδέες για την καθημερινότητα.',
    }
  }

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.split('/')[2]
    const post = posts.find((item) => item.slug === slug)

    if (post) {
      return {
        title: truncateTitle(post.seoTitle),
        description: post.metaDescription,
      }
    }

    return {
      title: 'Άρθρο | Αδαμαντία Τσερκάκη',
      description:
        'Διάβασε άρθρο ψυχοθεραπείας με πρακτικές ιδέες και ουσιαστική προσέγγιση για προσωπική κατανόηση.',
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
        'Απαντήσεις για πρώτη συνεδρία, διάρκεια, online θεραπεία, εμπιστευτικότητα και πρακτικά θέματα συνεργασίας.',
    }
  }

  if (pathname === '/privacy') {
    return {
      title: 'Πολιτική Απορρήτου | Αδαμαντία Τσερκάκη',
      description:
        'Δες πώς γίνεται η επεξεργασία προσωπικών δεδομένων, ποια δικαιώματα έχεις και πώς επικοινωνείς για GDPR αιτήματα.',
    }
  }

  if (pathname === '/terms') {
    return {
      title: 'Όροι Χρήσης | Αδαμαντία Τσερκάκη',
      description:
        'Ενημερώσου για τους όρους χρήσης του ιστότοπου, τα πνευματικά δικαιώματα και τους κανόνες ορθής χρήσης περιεχομένου.',
    }
  }

  return {
    title: 'Σελίδα | Αδαμαντία Τσερκάκη',
    description:
      'Ψυχοθεραπεία με σεβασμό και εμπιστοσύνη. Δες τις υπηρεσίες και επικοινώνησε για πρώτο ραντεβού.',
  }
}

function setMetaTag(selector, attribute, value) {
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    if (selector.includes('property=')) {
      element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '')
    } else {
      element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '')
    }
    document.head.appendChild(element)
  }
  element.setAttribute(attribute, value)
}

export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeoByPath(pathname)
    document.title = truncateTitle(seo.title)

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.setAttribute('name', 'description')
      document.head.appendChild(descriptionMeta)
    }
    const normalizedDescription = normalizeDescription(seo.description)
    descriptionMeta.setAttribute('content', normalizedDescription)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', `${BASE_URL}${pathname}`)

    setMetaTag('meta[property="og:title"]', 'content', truncateTitle(seo.title))
    setMetaTag('meta[property="og:description"]', 'content', normalizedDescription)
    setMetaTag('meta[property="og:url"]', 'content', `${BASE_URL}${pathname}`)
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image')
  }, [pathname])

  return null
}
