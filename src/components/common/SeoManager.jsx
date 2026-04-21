import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { services } from '../../data/services'
import { posts } from '../../data/posts'
import { localizePost } from '../../data/posts.i18n'
import { useLanguage } from '../../context/LanguageContext'

const BASE_URL = 'https://psychotherapytserkaki.gr'
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/hero-adam.webp`
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

function toAbsoluteUrl(urlOrPath) {
  if (!urlOrPath) {
    return DEFAULT_OG_IMAGE
  }

  if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) {
    return urlOrPath
  }

  if (urlOrPath.startsWith('/')) {
    return `${BASE_URL}${urlOrPath}`
  }

  return `${BASE_URL}/${urlOrPath}`
}

function getSeoByPath(pathname, isEnglish) {
  if (pathname === '/') {
    if (isEnglish) {
      return {
        title: 'Adamantia Tserkaki | Psychotherapy Chania',
        description:
          'Psychotherapy in Chania with empathy and a safe therapeutic setting. Book your first session in person or online.',
      }
    }
    return {
      title: 'Αδαμαντία Τσερκάκη | Ψυχοθεραπεία Χανιά',
      description:
        'Ψυχοθεραπεία στα Χανιά με ασφάλεια και ενσυναίσθηση. Κλείσε πρώτη συνεδρία δια ζώσης ή online.',
    }
  }

  if (pathname === '/about') {
    if (isEnglish) {
      return {
        title: 'About | Adamantia Tserkaki',
        description:
          'Learn more about Adamantia Tserkaki, her therapeutic approach, core values and clinical background.',
      }
    }
    return {
      title: 'Σχετικά | Αδαμαντία Τσερκάκη',
      description:
        'Γνώρισε την προσέγγιση, τις αξίες και το υπόβαθρο της Αδαμαντίας Τσερκάκη στη συνθετική ψυχοθεραπεία.',
    }
  }

  if (pathname === '/services') {
    if (isEnglish) {
      return {
        title: 'Psychotherapy Services | Adamantia Tserkaki',
        description:
          'Individual, couples and family therapy with a personalized, supportive and respectful approach.',
      }
    }
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
        title: truncateTitle(isEnglish ? `${service.title} | Adamantia Tserkaki` : `${service.title} | Αδαμαντία Τσερκάκη`),
        description: service.excerpt,
        ogImage: service.image || '/images/hero-adam.webp',
        ogImageAlt: isEnglish ? (service.titleEn || service.title) : service.title,
      }
    }

    if (isEnglish) {
      return {
        title: 'Psychotherapy Service | Adamantia Tserkaki',
        description:
          'Explore this therapy service and find the right support framework based on your needs and goals.',
      }
    }

    return {
      title: 'Υπηρεσία Ψυχοθεραπείας | Αδαμαντία Τσερκάκη',
      description:
        'Δες αναλυτικά τη θεραπευτική υπηρεσία και επίλεξε το κατάλληλο πλαίσιο υποστήριξης για εσένα.',
    }
  }

  if (pathname === '/blog') {
    if (isEnglish) {
      return {
        title: 'Psychotherapy Blog | Adamantia Tserkaki',
        description:
          'Articles on anxiety, relationships and emotional wellbeing with practical and grounded insights.',
      }
    }
    return {
      title: 'Blog Ψυχοθεραπείας | Αδαμαντία Τσερκάκη',
      description:
        'Άρθρα για άγχος, σχέσεις και ψυχική ευεξία με πρακτική προσέγγιση. Διάβασε χρήσιμες ιδέες για την καθημερινότητα.',
    }
  }

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.split('/')[2]
    const post = posts.find((item) => item.slug === slug)
    const localizedPost = post ? localizePost(post, isEnglish) : null

    if (localizedPost) {
      return {
        title: truncateTitle(localizedPost.seoTitle),
        description: localizedPost.metaDescription,
        ogImage: localizedPost.featuredImage,
        ogImageAlt: localizedPost.featuredImageAlt,
        ogType: 'article',
        articlePublishedTime: localizedPost.date,
      }
    }

    if (isEnglish) {
      return {
        title: 'Article | Adamantia Tserkaki',
        description:
          'Read psychotherapy insights with practical ideas for emotional understanding and everyday balance.',
      }
    }

    return {
      title: 'Άρθρο | Αδαμαντία Τσερκάκη',
      description:
        'Διάβασε άρθρο ψυχοθεραπείας με πρακτικές ιδέες και ουσιαστική προσέγγιση για προσωπική κατανόηση.',
    }
  }

  if (pathname === '/contact') {
    if (isEnglish) {
      return {
        title: 'Contact | Adamantia Tserkaki',
        description:
          'Contact Adamantia Tserkaki to book your first session. In-person sessions in Chania and online sessions available.',
      }
    }
    return {
      title: 'Επικοινωνία | Αδαμαντία Τσερκάκη',
      description:
        'Επικοινωνήστε με την Αδαμαντία Τσερκάκη για πρώτη συνεδρία. Δια ζώσης στο Μάλεμε Χανίων και online συνεδρίες με απόλυτη εμπιστευτικότητα.',
    }
  }

  if (pathname === '/faq') {
    if (isEnglish) {
      return {
        title: 'FAQ | Adamantia Tserkaki',
        description:
          'Answers about first sessions, duration, online therapy, confidentiality and practical collaboration details.',
      }
    }
    return {
      title: 'Συχνές Ερωτήσεις | Αδαμαντία Τσερκάκη',
      description:
        'Απαντήσεις για πρώτη συνεδρία, διάρκεια, online θεραπεία, εμπιστευτικότητα και πρακτικά θέματα συνεργασίας.',
    }
  }

  if (pathname === '/privacy') {
    if (isEnglish) {
      return {
        title: 'Privacy Policy | Adamantia Tserkaki',
        description:
          'Learn how personal data is processed, which rights you have and how to contact us for GDPR-related requests.',
      }
    }
    return {
      title: 'Πολιτική Απορρήτου | Αδαμαντία Τσερκάκη',
      description:
        'Δες πώς γίνεται η επεξεργασία προσωπικών δεδομένων, ποια δικαιώματα έχεις και πώς επικοινωνείς για GDPR αιτήματα.',
    }
  }

  if (pathname === '/terms') {
    if (isEnglish) {
      return {
        title: 'Terms of Use | Adamantia Tserkaki',
        description:
          'Read the website terms of use, intellectual property rights and proper content usage guidelines.',
      }
    }
    return {
      title: 'Όροι Χρήσης | Αδαμαντία Τσερκάκη',
      description:
        'Ενημερώσου για τους όρους χρήσης του ιστότοπου, τα πνευματικά δικαιώματα και τους κανόνες ορθής χρήσης περιεχομένου.',
    }
  }

  if (isEnglish) {
    return {
      title: 'Page | Adamantia Tserkaki',
      description:
        'Psychotherapy with respect and trust. Explore services and contact us to schedule your first appointment.',
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
  const { isEnglish } = useLanguage()

  useEffect(() => {
    const seo = getSeoByPath(pathname, isEnglish)
    document.title = truncateTitle(seo.title)

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.setAttribute('name', 'description')
      document.head.appendChild(descriptionMeta)
    }
    const normalizedDescription = normalizeDescription(seo.description)
    const absoluteUrl = `${BASE_URL}${pathname}`
    const ogImage = toAbsoluteUrl(seo.ogImage)
    const ogImageAlt = seo.ogImageAlt || (isEnglish ? 'Adamantia Tserkaki psychotherapy' : 'Αδαμαντία Τσερκάκη ψυχοθεραπεία')
    const ogType = seo.ogType || 'website'
    const locale = isEnglish ? 'en_US' : 'el_GR'
    const alternateLocale = isEnglish ? 'el_GR' : 'en_US'
    const normalizedTitle = truncateTitle(seo.title)

    descriptionMeta.setAttribute('content', normalizedDescription)

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', absoluteUrl)

    setMetaTag('meta[property="og:type"]', 'content', ogType)
    setMetaTag('meta[property="og:site_name"]', 'content', 'Psychotherapy Tserkaki')
    setMetaTag('meta[property="og:locale"]', 'content', locale)
    setMetaTag('meta[property="og:locale:alternate"]', 'content', alternateLocale)
    setMetaTag('meta[property="og:title"]', 'content', normalizedTitle)
    setMetaTag('meta[property="og:description"]', 'content', normalizedDescription)
    setMetaTag('meta[property="og:url"]', 'content', absoluteUrl)
    setMetaTag('meta[property="og:image"]', 'content', ogImage)
    setMetaTag('meta[property="og:image:secure_url"]', 'content', ogImage)
    setMetaTag('meta[property="og:image:alt"]', 'content', ogImageAlt)

    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMetaTag('meta[name="twitter:title"]', 'content', normalizedTitle)
    setMetaTag('meta[name="twitter:description"]', 'content', normalizedDescription)
    setMetaTag('meta[name="twitter:url"]', 'content', absoluteUrl)
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage)
    setMetaTag('meta[name="twitter:image:alt"]', 'content', ogImageAlt)

    if (seo.articlePublishedTime) {
      setMetaTag('meta[property="article:published_time"]', 'content', seo.articlePublishedTime)
    }

    document.documentElement.lang = isEnglish ? 'en' : 'el'
  }, [pathname, isEnglish])

  return null
}
